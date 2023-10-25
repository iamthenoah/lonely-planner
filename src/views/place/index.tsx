import { RouteProp, useRoute } from '@react-navigation/native'
import { Comment } from '../../components/comment'
import { PlaceInfo } from '../../types/api'
import { SafeAreaView } from 'react-native-safe-area-context'

export type PlaceParams = RouteProp<{
	params: { place: PlaceInfo }
}>

export const Place = () => {
	const route = useRoute<PlaceParams>()
	const place = route.params.place

	return (
		<SafeAreaView>
			<Comment text={JSON.stringify(place, null, 2)} />
		</SafeAreaView>
	)
}
