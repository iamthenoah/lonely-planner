import { StyleSheet, View } from 'react-native'
import MapView from 'react-native-maps'
import { useNavigation } from '@react-navigation/native'
import { Widget } from '../../../components/widget'
import { Title } from '../../../components/title'
import { Trip } from '../../../types/trip'
import { formatHours } from '../../../components/date-input'
import { Comment } from '../../../components/comment'

export type ProgressProps = {
	day: number
	trip: Trip
	index: number
}

export type MapWidgetProps = ProgressProps

export const CurrentTripWidget = ({ index, day, trip }: MapWidgetProps) => {
	const navigation = useNavigation<any>()

	return (
		<Widget
			footer={<Footer day={day} trip={trip} index={index} />}
			shadow
			onPress={() => navigation.navigate('/map', { index, trip, day })}
		>
			<MapView
				style={styles.map}
				showsUserLocation
				followsUserLocation
				zoomEnabled={false}
				zoomTapEnabled={false}
				pitchEnabled={false}
				rotateEnabled={false}
				scrollEnabled={false}
				zoomControlEnabled={false}
				scrollDuringRotateOrZoomEnabled={false}
			/>
		</Widget>
	)
}

const Footer = ({ trip, day, index }: ProgressProps) => {
	const place = trip.days[day].places[index]

	return (
		<View style={styles.footer}>
			<Title text={'Day ' + (day + 1)} />
			<View style={styles.next}>
				{place && (
					<>
						<Title text={place.info.name} />
						<Comment text={formatHours(new Date(place.time))} />
					</>
				)}
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		fontSize: 18,
		fontWeight: 'bold',
		color: '#6A6A6A',
		marginVertical: 10
	},
	footer: {
		padding: 15,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	next: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		gap: 10
	},
	map: {
		width: '100%',
		height: 200
	}
})
