import {
	ApiResponse,
	NearbyApiResponse,
	NearestPlace,
	Place,
	PlaceInfo,
	PlaceInfoApiResponse,
	PlaceInterest,
	PlacesApiResponse
} from '../types/api'
import axios from 'axios'
import { PoiInterest, Pois } from '../types/poi'

const API_KEY = 'AIzaSyDMXzu4w0VjSBILghLqzBBF8BBB_-EatU8'

export const getPlaces = async (input: string, types?: string[]): Promise<Place[]> => {
	// https://developers.google.com/maps/documentation/places/web-service/supported_types#table1
	let params = `/autocomplete/json?input=${input}`

	if (types && types.length < 5) {
		params += '&types=' + types.join('|')
	}
	return makeRequest<PlacesApiResponse>(params).then(data => data.predictions)
}

export const getNearestPois = async (
	lat: number,
	lng: number,
	interests: PoiInterest[]
): Promise<PlaceInterest | null> => {
	const types = [].concat(...(interests.map(interest => Pois[interest]) as any[]))
	const type = types[Math.floor(Math.random() * types.length)]

	const data = await makeRequest<NearbyApiResponse>(
		`/nearbysearch/json?location=${lat},${lng}&radius=1000&types=${type}`
	)

	if (data.results.length > 0) {
		const info = await getPlaceInfo(data.results[0].place_id)
		return { type, info }
	}
	return null
}

export const getPlaceInfo = async (placeId: string): Promise<PlaceInfo> => {
	return makeRequest<PlaceInfoApiResponse>('/details/json?place_id=' + placeId).then(data => data.result)
}

export const getNearestPlace = async (lat: number, lon: number): Promise<NearestPlace[]> => {
	return makeRequest<NearbyApiResponse>(`/nearbysearch/json?location=${lat},${lon}&radius=100`).then(
		data => data.results
	)
}

export const getImage = (referenceId: string): string => {
	return getUrl('/photo?maxwidth=400&photo_reference=' + referenceId)
}

const makeRequest = async <T>(params: string): Promise<ApiResponse<T>> => {
	return axios.get<ApiResponse<T>>(getUrl(params)).then(res => res.data)
}

const getUrl = (params: string) => {
	return 'https://maps.googleapis.com/maps/api/place' + params + '&key=' + API_KEY
}
