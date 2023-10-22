import { Content } from '../../components/layout/content'
import { CurrentTripSection } from './components/trip-section'
import { TripsSection } from './components/trips-section'
import { DiscoverSection } from './components/discover-section'
import { useEffect, useState } from 'react'
import { Trip } from '../../types/trip'
import { getTrips } from '../../storage'

export const Home = () => {
	const [trip, setTrip] = useState<Trip | null>()

	useEffect(() => {
		getTrips().then(trips => trips.length > 0 && setTrip(trips[0]))
	}, [])

	return (
		<Content scrollEnabled>
			{trip && <CurrentTripSection trip={trip} />}
			<TripsSection />
			<DiscoverSection />
		</Content>
	)
}
