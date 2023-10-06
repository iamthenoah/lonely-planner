import { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import * as Location from 'expo-location'
import { CreateTrip } from './views/create-trip'
import { Home } from './views/home'
import { Map } from './views/map'

const { Screen, Navigator } = createNativeStackNavigator()

const options = { headerShown: false, gestureEnabled: true }

export default () => {
	useEffect(() => {
		Location.requestForegroundPermissionsAsync()
	}, [])

	return (
		<NavigationContainer>
			<Navigator initialRouteName="/home">
				<Screen name="/home" component={Home} options={options} />
				<Screen name="/map" component={Map} options={options} />
				<Screen name="/trip/create" component={CreateTrip} options={options} />
			</Navigator>
		</NavigationContainer>
	)
}
