import { createContext, useContext, useState, useEffect, PropsWithChildren } from 'react'
import * as MediaLibrary from 'expo-media-library'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Trip, TripDate } from '../types/trip'
import { PlaceInfo } from '../types/api'
import { LatLng } from 'react-native-maps'

const isWithin = (origin: LatLng, location: LatLng, distance: number) => {
	const lat1 = origin.latitude * (Math.PI / 180)
	const lng1 = origin.longitude * (Math.PI / 180)
	const lat2 = location.latitude * (Math.PI / 180)
	const lng2 = location.longitude * (Math.PI / 180)

	const dLat = lat2 - lat1
	const dlng = lng2 - lng1

	const a = Math.sin(dLat / 2) ** 2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dlng / 2) ** 2
	const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))

	return 6371 * c <= distance
}

const TripContext = createContext<{
	trips: Trip[]
	get: (id: string) => Trip | null
	getPhotos: (tripId: string, day: number, coordinate: LatLng) => Promise<MediaLibrary.Asset[]>
	getOngoing: () => Trip | null
	create: (place: PlaceInfo, dates: TripDate) => Promise<Trip>
	remove: (id: string) => Promise<void>
	update: (id: string, callback: (trip: Trip) => void) => Promise<void>
	duplicate: (date: Date, trip: Trip) => Promise<Trip>
}>(null as any)

export const useTrips = () => useContext(TripContext)

export const TripProvider = ({ children }: PropsWithChildren) => {
	const [trips, setTrips] = useState<Trip[]>([])

	useEffect(() => {
		loadTrips()
	}, [])

	const loadTrips = async () => {
		const data = await AsyncStorage.getItem('trips')
		setTrips(data ? JSON.parse(data) : [])
	}

	const reloadTrips = async (trips: Trip[]) => {
		await AsyncStorage.setItem('trips', JSON.stringify(trips))
		loadTrips()
	}

	const get = (id: string): Trip | null => {
		return trips.find(trip => trip.id === id) || null
	}

	const getPhotos = async (tripId: string, day: number, coordinates: LatLng) => {
		const trip = get(tripId)!

		const date = new Date(trip.dates.start)
		date.setDate(date.getDate() + day)
		const createdAfter = new Date(date)
		date.setDate(date.getDate() + 1)
		const createdBefore = new Date(date)

		const assets = await MediaLibrary.getAssetsAsync({ createdAfter, createdBefore })

		const photos = []

		if (assets) {
			for (const asset of assets.assets) {
				const photo = await MediaLibrary.getAssetInfoAsync(asset.id)

				if (photo.location && isWithin(photo.location, coordinates, 1)) {
					photos.push(photo)
				}
			}
		}
		return photos
	}

	const getOngoing = () => {
		const today = new Date().getTime()

		for (const trip of trips) {
			const start = new Date(trip.dates.start).getTime()
			const end = new Date(trip.dates.end).getTime()

			if (start <= today && today <= end) {
				return trip
			}
		}
		return null
	}

	const create = async (place: PlaceInfo, dates: TripDate) => {
		const id = Math.random().toString()
		const count = Math.ceil((new Date(dates.end).getTime() - new Date(dates.start).getTime()) / (24 * 60 * 60 * 1_000))
		const days = Array(count).fill({ places: [] })
		const trip = { id, place, dates, days }
		await reloadTrips([...trips, trip])
		return trip
	}

	const remove = async (id: string) => {
		await reloadTrips(trips.filter(trip => trip.id !== id))
	}

	const update = async (id: string, callback: (updated: Trip) => void) => {
		const updated = get(id)

		if (updated) {
			callback(updated)
			await reloadTrips(trips.map(trip => (trip.id === id ? updated : trip)))
		}
	}

	const duplicate = async (start: Date, trip: Trip) => {
		const end = new Date(start)
		end.setDate(end.getDate() + trip.days.length)
		trip.dates = { start: start.toString(), end: end.toString() }
		trip.id = Math.random().toString()
		await reloadTrips([...trips, trip])
		return trip
	}

	return (
		<TripContext.Provider value={{ trips, get, getPhotos, getOngoing, create, remove, update, duplicate }}>
			{children}
		</TripContext.Provider>
	)
}
