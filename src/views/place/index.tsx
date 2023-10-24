import { RouteProp, useRoute } from '@react-navigation/native'
import { View } from 'react-native'
import { Comment } from '../../components/comment'
import { PlaceInfo } from '../../types/api'

export type PlaceParams = RouteProp<{
	params: { place: PlaceInfo }
}>

export const Place = () => {
	const route = useRoute<PlaceParams>()
	const place = route.params.place

	return (
		<View>
			<Comment text={JSON.stringify(place, null, 2)} />
		</View>
	)
}
