import React, { useState, useRef } from 'react'
import { StyleSheet, Animated } from 'react-native'
import MapView, { LatLng, Marker } from 'react-native-maps'
import { Container } from '../../components/layout/container'
import { MapHeader } from './components/map-header'
import { RouteProp, useRoute } from '@react-navigation/native'
import { Trip, TripPlace } from '../../types/trip'
import { PlaceSection } from './components/place-section'

export type TripMapParams = RouteProp<{
	params: { trip: Trip; day: number; index?: number }
}>

export const TripMap = () => {
	const { index, day, trip } = useRoute<TripMapParams>().params
	const places = trip.days[day].places

	const [marker, setMarker] = useState<LatLng>()

	const mapRef = useRef<MapView>(null)
	const region = useRef<Animated.Value>(new Animated.Value(0)).current

	const onPlaceChange = (place: TripPlace) => {
		const { lat, lng } = place.info.geometry.location
		setViewport({ latitude: lat, longitude: lng }, 0.005)
	}

	const setViewport = (latlon: LatLng, delta: number) => {
		Animated.parallel([
			Animated.timing(region, {
				toValue: 1,
				duration: 500,
				useNativeDriver: false
			})
		]).start(() => {
			setMarker(latlon)
			region.setValue(0)
		})
		mapRef.current?.animateToRegion({ ...latlon, longitudeDelta: delta, latitudeDelta: delta }, 500)
	}

	return (
		<Container>
			<MapHeader day={day} id={trip.id} />
			<MapView
				ref={mapRef}
				style={styles.map}
				region={marker ? { ...marker, latitudeDelta: 0.005, longitudeDelta: 0.005 } : undefined}
			>
				{marker && <Marker coordinate={marker} />}
			</MapView>
			<PlaceSection index={index} places={places} onPlaceChange={onPlaceChange} />
		</Container>
	)
}

const styles = StyleSheet.create({
	map: {
		flex: 1
	}
})
