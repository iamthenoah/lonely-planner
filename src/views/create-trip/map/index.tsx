import { useEffect, useState } from 'react'
import { RouteProp, useRoute } from '@react-navigation/native'
import { StyleSheet } from 'react-native'
import { MapHeader } from './components/map-header'
import { PlaceWidget } from './components/place-widget'
import MapView, { LatLng, MapPressEvent, Marker, Region } from 'react-native-maps'
import { getNearestPlace, getPlaceInfo } from '../../../apis/google'
import { PlaceInfo } from '../../../types/api'
import * as Location from 'expo-location'
import { Container } from '../../../components/layout/container'
import { useTrips } from '../../../contexts/trip-context'

export type CreateTripMapParams = RouteProp<{
	params: { id: string; day: number; count: number }
}>

export const CreateTripMap = () => {
	const { id, day, count } = useRoute<CreateTripMapParams>().params
	const trips = useTrips()
	const previous = trips.get(id)?.days[day].places[count - 1]

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
		<Container>
			<MapHeader onPlace={onPlace} />
			<MapView
				moveOnMarkerPress
				showsUserLocation
				style={styles.map}
				region={region}
				initialRegion={region}
				onPress={onPress}
			>
				{marker && <Marker coordinate={marker} />}
			</MapView>
			{place && <PlaceWidget id={id} day={day} place={place} previous={previous} />}
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
