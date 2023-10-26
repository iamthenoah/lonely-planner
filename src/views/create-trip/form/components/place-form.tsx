import { useState } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { PlaceSearchResult } from '../../map/components/place-search-result'
import { SearchBar } from '../../../../components/search-bar'
import { Place, PlaceInfo } from '../../../../types/api'
import { Widget } from '../../../../components/widget'
import { getPlaceInfo, getPlaces } from '../../../../apis/google'
import { PlaceButton } from '../../../../components/place-button'
import { Content } from '../../../../components/layout/content'

export type PlaceFormProps = {
	place?: PlaceInfo | null
	onPlace: (place: PlaceInfo | null) => void
}

export const PlaceForm = ({ place, onPlace }: PlaceFormProps) => {
	const [places, setPlaces] = useState<Place[]>([])

	const onSearchPlace = (input: string) => {
		getPlaces(input, ['(cities)']).then(setPlaces)
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
				<ScrollView style={styles.places}>
					{places.map(place => (
						<PlaceSearchResult key={Math.random()} place={place} onPress={onPress} />
					))}
				</ScrollView>
			)}
			{place && (
				<Widget style={styles.place}>
					<PlaceButton place={place} />
				</Widget>
			)}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		justifyContent: 'space-around',
		gap: 20,
		width: '80%'
	},
	places: {
		width: '100%'
	},
	place: {
		padding: 20
	}
})
