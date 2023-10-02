import { useNavigation } from '@react-navigation/native'
import MapView from 'react-native-maps'

export const Map = () => {
	const navigation = useNavigation()

	return <MapView style={{ flex: 1 }} onPress={() => navigation.navigate('Home')} />
}
