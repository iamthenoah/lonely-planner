import { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import * as Location from 'expo-location'
import { Home } from './views/home'
import { CreateTripForm } from './views/create-trip/form'
import { CreateTripMap } from './views/create-trip/map'
import { CreateTripJournal } from './views/create-trip/journal'
import { TripProvider } from './contexts/trip-context'
import { Discover } from './views/discover'
import { Place } from './views/place'

const { Screen, Navigator } = createNativeStackNavigator()

const options = { headerShown: false, gestureEnabled: false }
const modal: any = { ...options, presentation: 'modal', gestureEnabled: true }

export default () => {
	useEffect(() => {
		Location.requestForegroundPermissionsAsync()
	}, [])

	return (
		<TripProvider>
			<NavigationContainer>
				<Navigator initialRouteName="/home" screenOptions={{ contentStyle: { backgroundColor: 'white' } }}>
					<Screen name="/home" component={Home} options={options} />
					<Screen name="/trip/create/form" component={CreateTripForm} options={options} />
					<Screen name="/trip/create/map" component={CreateTripMap} options={options} />
					<Screen name="/trip/create/journal" component={CreateTripJournal} options={options} />
					<Screen name="/trip/discover" component={Discover} options={modal} />
					<Screen name="/place" component={Place} options={modal} />
				</Navigator>
			</NavigationContainer>
		</TripProvider>
	)
}
