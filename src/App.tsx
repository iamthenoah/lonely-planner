import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home } from './views/home'
import { Map } from './views/map'

const { Screen, Navigator } = createNativeStackNavigator()

export default () => {
	return (
		<NavigationContainer>
			<Navigator initialRouteName="Home">
				<Screen name="Home" component={Home} options={{ headerShown: false }} />
				<Screen name="Map" component={Map} options={{ headerShown: false }} />
			</Navigator>
		</NavigationContainer>
	)
}
