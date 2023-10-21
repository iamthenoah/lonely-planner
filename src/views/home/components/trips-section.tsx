import { ScrollView } from 'react-native'
import { Section } from '../../../components/layout/section'
import { CreateTripWidget } from './create-trip-widget'
import { TripWidget } from './trip-widget'
import { Link } from '../../../components/link'
import { useEffect, useState } from 'react'
import { Trip } from '../../../types/trip'
import { getTrips } from '../../../storage'

export const TripsSection = () => {
	const [trips, setTrips] = useState<Trip[]>([])

	useEffect(() => {
		getTrips().then(setTrips)
	}, [])

	return (
		<Section name="Trips" action={<Link text="view all" onPress={console.log} />}>
			<ScrollView horizontal>
				<CreateTripWidget />
				{trips.map(trip => (
					<TripWidget key={Math.random()} trip={trip} />
				))}
			</ScrollView>
		</Section>
	)
}
