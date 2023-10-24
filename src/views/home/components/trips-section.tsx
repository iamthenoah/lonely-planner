import { ScrollView } from 'react-native'
import { Section } from '../../../components/layout/section'
import { CreateTripWidget } from './create-trip-widget'
import { TripWidget } from './trip-widget'
import { useTrips } from '../../../contexts/trip-context'

export const TripsSection = () => {
	const trips = useTrips()

	return (
		<Section name="Trips" /* action={<Link text="view all" onPress={console.log} />} */>
			<ScrollView horizontal>
				<CreateTripWidget />
				{trips.trips.map(trip => (
					<TripWidget key={Math.random()} trip={trip} />
				))}
			</ScrollView>
		</Section>
	)
}
