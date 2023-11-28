import { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import * as MediaLibrary from 'expo-media-library'
import * as Location from 'expo-location'
import { Home } from './views/home'
import { CreateTripForm } from './views/trip/form'
import { TripMap } from './views/trip/map'
import { TripJournal } from './views/trip/journal'
import { TripProvider } from './contexts/trip-context'
import { Discover } from './views/trip/discover'
import { Place } from './views/place'
import { TripMap } from './views/map'

const { Screen, Navigator } = createNativeStackNavigator()

const options = { headerShown: false, gestureEnabled: false }
const modal: any = { ...options, presentation: 'modal', gestureEnabled: true }

export default () => {
	useEffect(() => {
		Location.requestForegroundPermissionsAsync()
		MediaLibrary.requestPermissionsAsync()
	}, [])

	return (
		<TripProvider>
			<NavigationContainer>
				<Navigator initialRouteName="/home" screenOptions={{ contentStyle: { backgroundColor: 'white' } }}>
					<Screen name="/home" component={Home} options={options} />
					<Screen name="/trip/form" component={CreateTripForm} options={options} />
					<Screen name="/trip/map" component={TripMap} options={options} />
					<Screen name="/trip/journal" component={TripJournal} options={options} />
					<Screen name="/trip/discover" component={Discover} options={modal} />
					<Screen name="/place" component={Place} options={modal} />
					<Screen name="/map" component={TripMap} options={options} />
				</Navigator>
			</NavigationContainer>
		</TripProvider>
	)
}
