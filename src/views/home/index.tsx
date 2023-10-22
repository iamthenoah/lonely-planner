import { Content } from '../../components/layout/content'
import { CurrentTripSection } from './components/trip-section'
import { TripsSection } from './components/trips-section'
import { DiscoverSection } from './components/discover-section'
import { useTrips } from '../../contexts/trip-context'

export const Home = () => {
	const trips = useTrips()
	const ongoing = trips.getOngoing()

	return (
		<Content scrollEnabled>
			{ongoing && <CurrentTripSection trip={ongoing} />}
			<TripsSection />
			<DiscoverSection />
		</Content>
	)
}
