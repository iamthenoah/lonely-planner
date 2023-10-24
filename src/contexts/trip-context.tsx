import { createContext, useContext, useState, useEffect, PropsWithChildren } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Trip, TripDate } from '../types/trip'
import { PlaceInfo } from '../types/api'

const TripContext = createContext<{
	trips: Trip[]
	get: (id: string) => Trip | null
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
		AsyncStorage.setItem('trips', JSON.stringify(trips)).then(loadTrips)
	}

	const get = (id: string): Trip | null => {
		return trips.find(trip => trip.id === id) || null
	}

	const getOngoing = () => {
		return trips[0]
	}

	const create = async (place: PlaceInfo, dates: TripDate) => {
		const id = Math.random().toString()
		const count = Math.ceil((dates.end.getTime() - dates.start.getTime()) / (24 * 60 * 60 * 1_000))
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
		trip.dates = { start, end }
		trip.id = Math.random().toString()
		await reloadTrips([...trips, trip])
		return trip
	}

	return (
		<TripContext.Provider value={{ trips, get, getOngoing, create, remove, update, duplicate }}>
			{children}
		</TripContext.Provider>
	)
}
