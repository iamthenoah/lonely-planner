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
}>(null as any)

export const useTrips = () => useContext(TripContext)

export const TripProvider = ({ children }: PropsWithChildren) => {
	const [trips, setTrips] = useState<Trip[]>([])

	useEffect(() => {
		const loadTrips = async () => {
			const storage = await AsyncStorage.getItem('trips')
			storage && setTrips(JSON.parse(storage))
		}

		loadTrips()
	}, [])

	const get = (id: string): Trip | null => {
		return trips.find(trip => trip.id === id) || null
	}

	const getOngoing = () => {
		return trips[0]
	}

	const create = async (place: PlaceInfo, dates: TripDate) => {
		const id = Math.random().toString()
		const length = Math.floor((dates.end.getTime() - dates.start.getTime()) / (24 * 60 * 60 * 1_000))
		const days = Array.from({ length }, () => ({ places: [] }))

		const trip = { id, place, dates, days }
		setTrips(prevTrips => [trip, ...prevTrips])
		await AsyncStorage.setItem('trips', JSON.stringify([trip, ...trips]))

		return trip
	}

	const remove = async (id: string) => {
		setTrips(prevTrips => prevTrips.filter(trip => trip.id !== id))
		await AsyncStorage.setItem('trips', JSON.stringify(trips.filter(trip => trip.id !== id)))
	}

	const update = async (id: string, callback: (updated: Trip) => void) => {
		const updated = get(id)

		if (updated) {
			callback(updated)
			setTrips(prevTrips => prevTrips.map(trip => (trip.id === id ? updated : trip)))
			await AsyncStorage.setItem('trips', JSON.stringify(trips.map(trip => (trip.id === id ? updated : trip))))
		}
	}

	return (
		<TripContext.Provider value={{ trips, get, getOngoing, create, remove, update: update }}>
			{children}
		</TripContext.Provider>
	)
}
