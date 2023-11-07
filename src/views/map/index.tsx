import { StyleSheet } from 'react-native'
import MapView from 'react-native-maps'
import { Container } from '../../components/layout/container'
import { MapHeader } from './components/map-header'
import { RouteProp, useRoute } from '@react-navigation/native'
import { Trip } from '../../types/trip'

export type TripMapParams = RouteProp<{
	params: { trip: Trip; day: number }
}>

export const TripMap = () => {
	const { trip, day } = useRoute<TripMapParams>().params

	return (
		<Container>
			<MapHeader day={day} id={trip.id} />
			<MapView style={styles.map} />
		</Container>
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
