import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StyleSheet } from 'react-native'
import { PlaceInfo } from '../../../../types/api'
import { Button } from '../../../../components/button'
import { Widget } from '../../../../components/widget'
import { useTrips } from '../../../../contexts/trip-context'
import { PlaceButton } from '../../../../components/place-button'
import { TripPlace } from '../../../../types/trip'

export type PlaceWidgetProps = {
	id: string
	day: number
	place: PlaceInfo
	previous?: TripPlace
}

export const PlaceWidget = ({ id, day, place, previous }: PlaceWidgetProps) => {
	const trips = useTrips()
	const navigation = useNavigation<any>()

	const getTime = () => {
		if (previous?.time) {
			const next = new Date(previous?.time)
			next.setHours(next.getHours() + 1)
			return next
		}
		const current = new Date()
		current.setHours(8)
		return current
	}

	const onPress = async () => {
		const data = { info: place, time: getTime().toString() }
		trips.update(id, trip => trip.days[day].places.push(data))
		navigation.navigate('/trip/create/journal', { id, day })
	}

	return (
		<SafeAreaView style={styles.container}>
			<Widget shadow style={styles.content}>
				<PlaceButton place={place} time={getTime()} />
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
