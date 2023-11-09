import { ScrollView, StyleSheet, View } from 'react-native'
import { CreateTripWidget } from './create-trip-widget'
import { TripWidget } from './trip-widget'
import { useTrips } from '../../../contexts/trip-context'
import { Content } from '../../../components/layout/content'
import { Title } from '../../../components/title'

export const TripsSection = () => {
	const trips = useTrips()

	return (
		<View>
			<Content>
				<View style={styles.title}>
					<Title text="Trips" />
				</View>
			</Content>
			<ScrollView horizontal showsHorizontalScrollIndicator={false}>
				<View style={styles.trips}>
					<CreateTripWidget />
					{trips.trips.map(trip => (
						<TripWidget key={Math.random()} trip={trip} />
					))}
				</View>
			</ScrollView>
		</View>
	)
}

const styles = StyleSheet.create({
	title: {
		marginBottom: 10
	},
	trips: {
		marginHorizontal: 25,
		display: 'flex',
		flexDirection: 'row',
		gap: 10
	}
})
