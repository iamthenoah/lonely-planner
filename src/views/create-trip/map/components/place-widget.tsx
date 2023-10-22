import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StyleSheet } from 'react-native'
import { PlaceInfo } from '../../../../types/api'
import { Button } from '../../../../components/button'
import { Widget } from '../../../../components/widget'
import { useTrips } from '../../../../contexts/trip-context'
import { PlaceButton } from '../../../../components/place-button'

export type PlaceWidgetProps = {
	id: string
	day: number
	place: PlaceInfo
}

export const PlaceWidget = ({ id, day, place }: PlaceWidgetProps) => {
	const trips = useTrips()
	const navigation = useNavigation<any>()

	const onPress = async () => {
		trips.update(id, trip => trip.days[day].places.push(place))
		navigation.navigate('/trip/create/journal', { id, day })
	}

	return (
		<SafeAreaView style={styles.container}>
			<Widget shadow style={styles.content}>
				<PlaceButton place={place} />
				<Button text="Add Location" onPress={onPress} />
			</Widget>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		position: 'absolute',
		paddingHorizontal: 20,
		width: '100%',
		bottom: 0
	},
	content: {
		padding: 20,
		gap: 15
	}
})
