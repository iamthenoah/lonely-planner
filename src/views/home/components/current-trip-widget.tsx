import { StyleSheet, View } from 'react-native'
import MapView from 'react-native-maps'
import { useNavigation } from '@react-navigation/native'
import { Widget } from '../../../components/widget'
import { Title } from '../../../components/title'
import { Trip, TripPlace } from '../../../types/trip'
import { formatHours } from '../../../components/date-input'
import { Comment } from '../../../components/comment'
import { getCurrentTripDay } from './trip-section'

export type ProgressProps = {
	day: number
	trip: Trip
	place?: TripPlace
}

export type MapWidgetProps = ProgressProps

export const CurrentTripWidget = ({ day, trip, place }: MapWidgetProps) => {
	const navigation = useNavigation<any>()

	return (
		<Widget
			footer={<Footer day={day} trip={trip} place={place} />}
			shadow
			onPress={() => navigation.navigate('/map', { trip, day })}
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

const Footer = ({ place, day }: ProgressProps) => {
	return (
		<View style={styles.footer}>
			<Title text={'Day ' + day} />
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
