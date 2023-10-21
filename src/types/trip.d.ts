import { LatLng } from 'react-native-maps'

export type Trip = {
	id: string
	location: TripLocation
	dates: TripDates
	days: TripDay[]
}

export type TripDay = {
	pois: TripPoi[]
}

export type TripLocation = {
	name: string
	coordinate: LatLng
}

export type TripDates = {
	start: Date
	end: Date
}

export type TripPoi = {
	name: string
	coordinate: LatLng
}
