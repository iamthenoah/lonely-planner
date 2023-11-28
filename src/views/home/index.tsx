import { CurrentTripSection } from './components/current-trip-section'
import { TripsSection } from './components/trips-section'
import { DiscoverSection } from './components/discover-section'
import { useTrips } from '../../contexts/trip-context'
import { ScrollView } from 'react-native'
import { Container } from '../../components/layout/container'

export const Home = () => {
	const trips = useTrips()
	const ongoing = trips.getOngoing()

	return (
		<Container>
			<ScrollView style={{ overflow: 'visible' }}>
				{ongoing && <CurrentTripSection trip={ongoing} />}
				<TripsSection />
				<DiscoverSection />
			</ScrollView>
		</Container>
	)
}
