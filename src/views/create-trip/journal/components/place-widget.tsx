import { Image, ScrollView, StyleSheet, View } from 'react-native'
import { PlaceInfo } from '../../../../types/api'
import { IconButton } from '../../../../components/icon-button'
import { useTrips } from '../../../../contexts/trip-context'
import { PlaceButton } from '../../../../components/place-button'
import { getImage } from '../../../../apis/google'

export type PlaceWidgetProps = {
	id: string
	day: number
	index: number
	place: PlaceInfo
	editable?: boolean
}

export const PlaceWidget = ({ id, day, index, place, editable }: PlaceWidgetProps) => {
	const trips = useTrips()

	const onRemove = () => {
		trips.update(id, trip => (trip.days[day].places = trip.days[day].places.filter((_, i) => i !== index)))
	}

	return (
		<View style={styles.container}>
			<View style={styles.button}>
				<PlaceButton place={place} />
				{editable && <IconButton icon="close" color="red" seamless onPress={onRemove} />}
			</View>
			<ScrollView style={styles.photos} horizontal>
				{editable &&
					Array.from(place.photos || [])
						.splice(1) // remove first image
						.map(photo => (
							<Image key={Math.random()} style={styles.image} source={{ uri: getImage(photo.photo_reference) }} />
						))}
			</ScrollView>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		marginVertical: 10,
		marginLeft: 25,
		gap: 15
	},
	button: {
		marginRight: 15,
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	photos: {
		display: 'flex',
		flexDirection: 'row'
	},
	image: {
		marginRight: 10,
		borderRadius: 10,
		width: 100,
		height: 100
	}
})
