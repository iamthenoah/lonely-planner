import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home } from './views/home'
import { Map } from './views/map'

const { Screen, Navigator } = createNativeStackNavigator()

const options = { headerShown: false, gestureEnabled: true }

export default () => {
	return (
		<NavigationContainer>
			<Navigator initialRouteName="/home">
				<Screen name="/home" component={Home} options={options} />
				<Screen name="/map" component={Map} options={options} />
			</Navigator>
		</NavigationContainer>
	)
}
