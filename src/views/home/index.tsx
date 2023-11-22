import { CurrentTripSection } from './components/trip-section'
import { TripsSection } from './components/trips-section'
import { DiscoverSection } from './components/discover-section'
import { useTrips } from '../../contexts/trip-context'
import { ScrollView } from 'react-native'
import { Container } from '../../components/layout/container'
import { useEffect } from 'react'
import { useUser } from '../../contexts/user-context'
import { useNavigation } from '@react-navigation/native'

export const Home = () => {
	const trips = useTrips()
	const ongoing = trips.getOngoing()

	const user = useUser()
	const navigation = useNavigation<any>()

	useEffect(() => {
		if (!user) {
			navigation.navigate('/onboarding')
		}
	}, [])

	return (
		<Container>
			<ScrollView>
				{ongoing && <CurrentTripSection trip={ongoing} />}
				<TripsSection />
				<DiscoverSection />
			</ScrollView>
		</Container>
	)
}
