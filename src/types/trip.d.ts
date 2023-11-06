import { PlaceInfo } from './api'

export type Trip = {
	id: string
	place: PlaceInfo
	dates: TripDate
	days: TripDay[]
}

export type TripDay = {
	places: TripPlace[]
}

export type TripPlace = {
	time: string
	info: PlaceInfo
}

export type TripDate = {
	start: string
	end: string
}
