import { createContext, useContext, useState, useEffect, PropsWithChildren } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Trip, TripDate } from '../types/trip'
import { PlaceInfo } from '../types/api'

const TripContext = createContext<{
	trips: Trip[]
	get: (id: string) => Trip | null
	getOngoing: () => Trip | null
	getUnavailableDates: () => Date[]
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

	const getOngoing = () => {
		const today = new Date()

		for (const trip of trips) {
			const start = new Date(trip.dates.start)
			const end = new Date(trip.dates.end)

			if (start <= today && today <= end) {
				return trip
			}
		}
		return null
	}

	const getUnavailableDates = () => {
		const dates: Date[] = []

		for (const trip of trips) {
			const start = new Date(trip.dates.start)
			const end = new Date(trip.dates.end)
			let current = new Date(start)

			while (current <= end) {
				dates.push(new Date(current))
				current.setDate(current.getDate() + 1)
			}
		}
		return dates
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
		<TripContext.Provider value={{ trips, get, getOngoing, getUnavailableDates, create, remove, update, duplicate }}>
			{children}
		</TripContext.Provider>
	)
}
