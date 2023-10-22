import { LatLng } from 'react-native-maps'
import { PlaceInfo } from './api'

export type Trip = {
	id: string
	place: PlaceInfo
	dates: TripDate
	days: TripDay[]
}

export type TripDay = {
	places: PlaceInfo[]
}

export type TripDate = {
	start: Date
	end: Date
}
