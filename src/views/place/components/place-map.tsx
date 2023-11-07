import MapView, { Marker, Region } from 'react-native-maps'
import { PlaceInfo } from '../../../types/api'
import { StyleSheet, View } from 'react-native'
import { useEffect, useState } from 'react'
import { Widget } from '../../../components/widget'
import { Content } from '../../../components/layout/content'
import { Title } from '../../../components/title'

export type PlaceMapProps = {
	place: PlaceInfo
}

export const PlaceMap = ({ place }: PlaceMapProps) => {
	const [region, setRegion] = useState<Region | undefined>()

	const coordinate = {
		latitude: place.geometry.location.lat,
		longitude: place.geometry.location.lng
	}

	useEffect(() => {
		setRegion({ ...coordinate, longitudeDelta: 0.005, latitudeDelta: 0.005 })
	}, [])

	return (
		<Content>
			<View style={styles.container}>
				<Title text="Map" />
				<Widget>
					<MapView
						region={region}
						style={styles.map}
						zoomEnabled={false}
						zoomTapEnabled={false}
						pitchEnabled={false}
						rotateEnabled={false}
						scrollEnabled={false}
						zoomControlEnabled={false}
						scrollDuringRotateOrZoomEnabled={false}
					>
						<Marker coordinate={coordinate} />
					</MapView>
				</Widget>
			</View>
		</Content>
	)
}

const styles = StyleSheet.create({
	container: {
		gap: 10,
		display: 'flex',
		marginVertical: 20
	},
	map: {
		width: '100%',
		height: 200
	}
})
