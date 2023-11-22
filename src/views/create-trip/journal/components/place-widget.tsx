import { Image, ScrollView, StyleSheet, View } from 'react-native'
import { IconButton } from '../../../../components/icon-button'
import { useTrips } from '../../../../contexts/trip-context'
import { PlaceButton } from '../../../../components/place-button'
import { TripPlace } from '../../../../types/trip'
import { useEffect, useState } from 'react'
import { Asset } from 'expo-media-library'

export type PlaceWidgetProps = {
	id: string
	day: number
	index: number
	place: TripPlace
	editable?: boolean
}

export const PlaceWidget = ({ id, day, index, place, editable }: PlaceWidgetProps) => {
	const trips = useTrips()
	const [photos, setPhotos] = useState<Asset[]>([])

	useEffect(() => {
		const { lat, lng } = place.info.geometry.location
		trips.getPhotos(id, day, { latitude: lat, longitude: lng }).then(setPhotos)
	}, [id])

	const onRemove = () => {
		trips.update(id, trip => (trip.days[day].places = trip.days[day].places.filter((_, i) => i !== index)))
	}

	return (
		<View style={styles.container}>
			<View style={styles.button}>
				<PlaceButton place={place.info} info={{ id, day, index, time: place.time }} />
				{editable && <IconButton icon="close" color="red" seamless onPress={onRemove} />}
			</View>
			<ScrollView horizontal showsHorizontalScrollIndicator={false}>
				<View style={styles.photos}>
					{editable && photos.map(({ uri }) => <Image key={Math.random()} style={styles.image} source={{ uri }} />)}
				</View>
			</ScrollView>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		gap: 15,
		marginBottom: 25
	},
	button: {
		marginRight: 15,
		marginLeft: 25,
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	photos: {
		display: 'flex',
		flexDirection: 'row',
		marginHorizontal: 20
	},
	image: {
		marginHorizontal: 5,
		borderRadius: 10,
		width: 100,
		height: 100
	}
})
