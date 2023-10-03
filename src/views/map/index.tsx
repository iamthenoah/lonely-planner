import { StyleSheet, View } from 'react-native'
import { MapHeader } from './components/map-header'
import MapView from 'react-native-maps'

export const Map = () => {
	return (
		<View style={styles.container}>
			<MapHeader />
			<MapView showsUserLocation style={styles.map} />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	map: {
		flex: 1
	}
})
