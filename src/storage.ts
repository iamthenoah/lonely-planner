import AsyncStorage from '@react-native-async-storage/async-storage'
import { Trip } from './types/trip'

export const getTrips = async (): Promise<Trip[]> => {
	const trips = await AsyncStorage.getItem('trips')
	return trips ? JSON.parse(trips) : []
}

export const getTrip = async (id: string): Promise<Trip | null> => {
	const trips = await getTrips()
	return trips.find(trip => trip.id === id) || null
}

export const addTrip = async (trip: Trip) => {
	const trips = await getTrips()
	await AsyncStorage.setItem('trips', JSON.stringify([trip, ...trips]))
}

export const setTrip = async (id: string, trip: Trip) => {
	const trips = (await getTrips()).map(t => (t.id === id ? trip : t))
	await AsyncStorage.setItem('trips', JSON.stringify(trips))
}
