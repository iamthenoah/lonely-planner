import { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { MapHeader } from './components/map-header'
import { PoiWidget } from './components/poi-widget'
import MapView, { Marker, Region } from 'react-native-maps'
import { Result } from '../../types/poi'
import * as Location from 'expo-location'

export const Map = () => {
	const [poi, setPoi] = useState<Result | null>(null)
	const [region, setRegion] = useState<Region | undefined>()

	useEffect(() => {
		Location.getCurrentPositionAsync().then(location => {
			setRegion({
				longitude: location.coords.longitude,
				latitude: location.coords.latitude,
				longitudeDelta: 0.005,
				latitudeDelta: 0.005
			})
		})
	}, [])

	const createMarker = (result: Result) => {
		setPoi(result)
		setRegion({
			longitude: result.position.lon,
			latitude: result.position.lat,
			longitudeDelta: 0.00005,
			latitudeDelta: 0.00005
		})
	}

	return (
		<View style={styles.container}>
			<MapHeader onPoi={createMarker} />
			<MapView showsUserLocation style={styles.map} region={region} initialRegion={region}>
				{poi && <Marker coordinate={{ latitude: poi.position.lat, longitude: poi.position.lon }} />}
			</MapView>
			{poi && <PoiWidget poi={poi} />}
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
