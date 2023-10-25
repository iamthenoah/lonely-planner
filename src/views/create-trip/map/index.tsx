import { useEffect, useState } from 'react'
import { RouteProp, useRoute } from '@react-navigation/native'
import { StyleSheet } from 'react-native'
import { MapHeader } from './components/map-header'
import { PlaceWidget } from './components/place-widget'
import MapView, { LatLng, MapPressEvent, Marker, Region } from 'react-native-maps'
import { getNearestPlace, getPlaceInfo } from '../../../apis/google'
import { PlaceInfo } from '../../../types/api'
import * as Location from 'expo-location'
import { SafeAreaView } from 'react-native-safe-area-context'

export type CreateTripMapParams = RouteProp<{
	params: { id: string; day: number }
}>

export const CreateTripMap = () => {
	const route = useRoute<CreateTripMapParams>()

	const [place, setPlace] = useState<PlaceInfo | null>(null)
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

	const onPlace = (place: PlaceInfo | null) => {
		setPlace(place)

		if (place) {
			const longitude = place.geometry.location.lng
			const latitude = place.geometry.location.lat
			const latlon = { longitude, latitude }

			setViewport(latlon, 0.005)
			setMarker(latlon)
		}
	}

	const onPress = async (event: MapPressEvent) => {
		const latlon = event.nativeEvent.coordinate
		const places = await getNearestPlace(latlon.latitude, latlon.longitude)
		const place = await getPlaceInfo(places[0].place_id)
		onPlace(place)
	}

	return (
		<SafeAreaView style={styles.container}>
			<MapHeader onPlace={onPlace} />
			<MapView showsUserLocation style={styles.map} region={region} initialRegion={region} onPress={onPress}>
				{marker && <Marker coordinate={marker} />}
			</MapView>
			{place && <PlaceWidget id={route.params.id} day={route.params.day} place={place} />}
		</SafeAreaView>
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
