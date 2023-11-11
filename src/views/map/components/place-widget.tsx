import { Dimensions, StyleSheet, View } from 'react-native'
import { Widget } from '../../../components/widget'
import { PlaceButton } from '../../../components/place-button'
import { TripPlace } from '../../../types/trip'
import { Subtitle } from '../../../components/subtitle'
import { formatAgo, formatHours } from '../../../components/date-input'
import { Comment } from '../../../components/comment'

export type PlaceWidgetProps = {
	place: TripPlace
}

export const PlaceWidget = ({ place }: PlaceWidgetProps) => {
	const time = new Date(place.time)
	time.setDate(new Date().getDate())

	return (
		<View style={styles.container}>
			<Widget shadow style={styles.content}>
				<View style={styles.time}>
					<Subtitle text={'At ' + formatHours(time)} />
					<Comment text={'In ' + formatAgo(new Date(), time, true)} />
				</View>
				<PlaceButton place={place.info} />
			</Widget>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		width: Dimensions.get('screen').width,
		paddingHorizontal: 20
	},
	content: {
		padding: 20
	},
	time: {
		alignItems: 'center',
		marginBottom: 10
	}
})
