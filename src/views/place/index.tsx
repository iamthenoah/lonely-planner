import { ScrollView, View } from 'react-native'
import { RouteProp, useRoute } from '@react-navigation/native'
import { PlaceInfo } from '../../types/api'
import { PlaceMap } from './components/place-map'
import { PlacePhotos } from './components/place-photos'
import { PlaceHeader } from './components/place-header'
import { PlaceTime, PlaceTimeProps } from './components/place-time'

export type PlaceParams = RouteProp<{
	params: PlaceTimeProps & {
		place: PlaceInfo
	}
}>

export const Place = () => {
	const { place, ...info } = useRoute<PlaceParams>().params

	return (
		<View>
			<PlaceHeader place={place} />
			<ScrollView>
				{info.time && <PlaceTime {...info} />}
				<PlaceMap place={place} />
				{place.photos && <PlacePhotos photos={place.photos} />}
			</ScrollView>
		</View>
	)
}
