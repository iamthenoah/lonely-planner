import { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { MapHeader } from './components/map-header'
import { PoiWidget } from './components/poi-widget'
import MapView, { LatLng, MapPressEvent, Marker, Region } from 'react-native-maps'
import { Result } from '../../types/poi'
import * as Location from 'expo-location'

export const Map = () => {
	const [poi, setPoi] = useState<Result | null>(null)
	const [marker, setMarker] = useState<LatLng | null>(null)
	const [region, setRegion] = useState<Region | undefined>()

	useEffect(() => {
		Location.getCurrentPositionAsync().then(location => {
			setViewport(location.coords, 0.005)
		})
	}, [])

	const setViewport = (latlon: LatLng, delta: number) => {
		setRegion({ ...latlon, longitudeDelta: delta, latitudeDelta: delta })
	}

	const onPoi = (result: Result) => {
		const longitude = result.position.lon
		const latitude = result.position.lat
		const latlon = { longitude, latitude }
		setViewport(latlon, 0.00005)
		setMarker(latlon)
		setPoi(result)
	}

	const onPress = (event: MapPressEvent) => {
		const latlon = event.nativeEvent.coordinate
		setViewport(latlon, 0.005)
		setMarker(latlon)
	}

	return (
		<View style={styles.container}>
			<MapHeader onPoi={onPoi} />
			<MapView showsUserLocation style={styles.map} region={region} initialRegion={region} onPress={onPress}>
				{marker && <Marker coordinate={marker} />}
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
