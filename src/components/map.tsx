import { useEffect, useState, useRef } from 'react'
import * as Location from 'expo-location'
import { StyleProp, StyleSheet, ViewStyle } from 'react-native'
import MapView, { LatLng, MapPressEvent, Marker } from 'react-native-maps'
import { getNearestPlace, getPlaceInfo } from '../apis/google'
import { PlaceInfo } from '../types/api'

export type MapProps = {
	onPlace?: (place: PlaceInfo) => void
	place?: PlaceInfo | null
	interactive?: boolean
	style?: StyleProp<ViewStyle>
}

export const Map = ({ onPlace, place, interactive = true, style }: MapProps) => {
	const [marker, setMarker] = useState<LatLng>()

	const map = useRef<MapView>(null)

	useEffect(() => {
		!place && Location.getCurrentPositionAsync().then(({ coords }) => setViewport(coords))
	}, [])

	useEffect(() => {
		if (place) {
			const { lat, lng } = place.geometry.location
			setViewport({ latitude: lat, longitude: lng })
		}
	}, [place])

	const setViewport = (latlng: LatLng) => {
		const region = { ...latlng, longitudeDelta: 0.005, latitudeDelta: 0.005 }
		map.current?.animateToRegion(region, 500)
		setMarker(latlng)
	}

	const onPress = async (event: MapPressEvent) => {
		if (onPlace) {
			const coordinate = event.nativeEvent.coordinate
			const places = await getNearestPlace(coordinate.latitude, coordinate.longitude)
			const place = await getPlaceInfo(places[0].place_id)
			setViewport(coordinate)
			onPlace(place)
		}
	}

	return (
		<MapView
			style={style ? style : styles.container}
			ref={map}
			showsUserLocation
			moveOnMarkerPress={interactive}
			zoomEnabled={interactive}
			zoomTapEnabled={interactive}
			pitchEnabled={interactive}
			rotateEnabled={interactive}
			scrollEnabled={interactive}
			zoomControlEnabled={interactive}
			scrollDuringRotateOrZoomEnabled={interactive}
			onPress={onPress}
		>
			{marker && <Marker coordinate={marker} />}
		</MapView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
})
