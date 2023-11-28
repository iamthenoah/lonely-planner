import * as SplashScreen from 'expo-splash-screen'
import { CurrentTripSection } from './components/current-trip-section'
import { TripsSection } from './components/trips-section'
import { DiscoverSection } from './components/discover-section'
import { useTrips } from '../../contexts/trip-context'
import { ScrollView } from 'react-native'
import { Container } from '../../components/layout/container'
import { useEffect } from 'react'

export const Home = () => {
	const trips = useTrips()
	const ongoing = trips.getOngoing()

	useEffect(() => {
		setTimeout(SplashScreen.hideAsync, 500)
	}, [])

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
