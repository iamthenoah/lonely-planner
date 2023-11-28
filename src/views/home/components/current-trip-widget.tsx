import { StyleSheet, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Widget } from '../../../components/widget'
import { Title } from '../../../components/title'
import { Trip, TripPlace } from '../../../types/trip'
import { formatHours } from '../../../components/date-input'
import { Comment } from '../../../components/comment'
import { Map } from '../../../components/map'

export type MapWidgetProps = {
	day: number
	trip: Trip
	index: number
	place: TripPlace
}

export const CurrentTripWidget = ({ index, day, trip, place }: MapWidgetProps) => {
	const navigation = useNavigation<any>()

	return (
		<Widget
			shadow
			footer={<Footer day={day} place={place} />}
			onPress={() => navigation.navigate('/map', { index, trip, day })}
		>
			<Map style={styles.map} place={place.info} interactive={false} />
		</Widget>
	)
}

export type ProgressProps = {
	place: TripPlace
	day: number
}

const Footer = ({ place, day }: ProgressProps) => {
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
