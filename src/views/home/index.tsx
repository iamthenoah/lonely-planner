import { Content } from '../../components/layout/content'
import { CurrentTripSection } from './components/trip-section'
import { TripsSection } from './components/trips-section'
import { DiscoverSection } from './components/discover-section'

export const Home = () => {
	return (
		<Content scrollEnabled>
			<CurrentTripSection />
			<TripsSection />
			<DiscoverSection />
		</Content>
	)
}
