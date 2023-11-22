import { ScrollView, View } from 'react-native'
import { RouteProp, useRoute } from '@react-navigation/native'
import { PlaceInfo } from '../../types/api'
import { PlaceMap } from './components/place-map'
import { PlacePhotos } from './components/place-photos'
import { PlaceHeader } from './components/place-header'
import { PlaceTime, PlaceTimeProps } from './components/place-time'
import { useTrips } from '../../contexts/trip-context'
import { getImage } from '../../apis/google'
import { useEffect, useState } from 'react'

export type PlaceParams = RouteProp<{
	params: {
		place: PlaceInfo
		info?: PlaceTimeProps
	}
}>

export const Place = () => {
	const trips = useTrips()
	const { place, info } = useRoute<PlaceParams>().params
	const [photos, setPhotos] = useState<string[]>([])

	useEffect(() => {
		if (info?.id) {
			const { lat, lng } = place.geometry.location
			trips.getPhotos(info?.id, info.day, { latitude: lat, longitude: lng }).then(setPhotos)
		} else if (place.photos) {
			setPhotos(place.photos.map(photo => getImage(photo.photo_reference)))
		}
	}, [info])

	return (
		<View>
			<PlaceHeader place={place} />
			<ScrollView>
				{info?.id && <PlaceTime {...info} />}
				<PlaceMap place={place} />
				<PlacePhotos photos={photos} />
			</ScrollView>
		</View>
	)
}
