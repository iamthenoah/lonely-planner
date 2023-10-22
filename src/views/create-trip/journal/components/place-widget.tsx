import { StyleSheet, View } from 'react-native'
import { PlaceInfo } from '../../../../types/api'
import { IconButton } from '../../../../components/icon-button'
import { useTrips } from '../../../../contexts/trip-context'
import { PlaceButton } from '../../../../components/place-button'

export type PlaceWidgetProps = {
	id: string
	day: number
	index: number
	place: PlaceInfo
}

export const PlaceWidget = ({ id, day, index, place }: PlaceWidgetProps) => {
	const trips = useTrips()

	const onRemove = () => {
		trips.update(id, trip => {
			trip.days[day].places = trip.days[day].places.filter((_, i) => i !== index)
		})
	}

	return (
		<View style={styles.container}>
			<PlaceButton place={place} />
			<IconButton icon="close" color="red" seamless onPress={onRemove} />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		marginLeft: 25,
		marginRight: 15,
		marginVertical: 10,
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'space-between'
	}
})
