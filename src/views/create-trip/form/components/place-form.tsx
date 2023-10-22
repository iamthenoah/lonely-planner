import { useState } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { PlaceSearchResult } from '../../map/components/place-search-result'
import { SearchBar } from '../../../../components/search-bar'
import { Place, PlaceInfo } from '../../../../types/api'
import { Info } from '../../../../components/info'
import { Widget } from '../../../../components/widget'
import { getPlaceInfo, getPlaces } from '../../../../apis/google'

export type PlaceFormProps = {
	place?: PlaceInfo | null
	onPlace: (place: PlaceInfo | null) => void
}

export const PlaceForm = ({ place, onPlace }: PlaceFormProps) => {
	const [places, setPlaces] = useState<Place[]>([])

	const onSearchPlace = (input: string) => {
		getPlaces(input, ['cities']).then(setPlaces)
		onPlace(null)
	}

	const onPress = (place: Place) => {
		getPlaceInfo(place.place_id).then(onPlace)
		setPlaces([])
	}

	return (
		<View style={styles.container}>
			<SearchBar onSubmit={onSearchPlace} placeholder="Search Location" />
			{places.length !== 0 && (
				<ScrollView style={styles.results}>
					{places.map(place => (
						<PlaceSearchResult key={Math.random()} place={place} onPress={onPress} />
					))}
				</ScrollView>
			)}
			{place && (
				<Widget style={styles.location}>
					<Info text={place.name} comment={place.name} />
				</Widget>
			)}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		paddingHorizontal: 25,
		display: 'flex',
		justifyContent: 'space-around',
		gap: 20
	},
	location: {
		paddingHorizontal: 20,
		paddingVertical: 10
	},
	results: {
		height: '70%'
	}
})
