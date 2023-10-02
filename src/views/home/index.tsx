import { Content } from '../../components/layouts/content'
import { TripSection } from './components/trip-section'
import { TripsSection } from './components/trips-section'
import { DiscoverSection } from './components/discover-section'

export const Home = () => {
	return (
		<Content>
			<TripSection />
			<TripsSection />
			<DiscoverSection />
		</Content>
	)
}
