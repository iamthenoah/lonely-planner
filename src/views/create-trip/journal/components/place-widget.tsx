import { Image, StyleSheet, View } from 'react-native'
import { Title } from '../../../../components/title'
import { PlaceInfo } from '../../../../types/api'
import { getImage } from '../../../../apis/google'
import { Comment } from '../../../../components/comment'
import { IconButton } from '../../../../components/icon-button'
import { useTrips } from '../../../../contexts/trip-context'

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
			<View style={styles.info}>
				{place.photos && <Image style={styles.image} source={{ uri: getImage(place.photos[0].photo_reference) }} />}
				<View>
					<Title text={place.name} />
					<Comment
						text={
							place.formatted_address.length > 30
								? place.formatted_address.substring(0, 30) + '...'
								: place.formatted_address
						}
					/>
				</View>
			</View>
			<IconButton icon="close" color="red" seamless onPress={onRemove} />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		marginHorizontal: 25,
		marginVertical: 10,
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	info: {
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'row',
		gap: 20
	},
	image: {
		borderRadius: 10,
		width: 50,
		height: 50
	}
})
