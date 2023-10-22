import { useState } from 'react'
import { Image, ScrollView, StyleSheet, View } from 'react-native'
import { PlaceSearchResult } from '../../map/components/place-search-result'
import { SearchBar } from '../../../../components/search-bar'
import { Place, PlaceInfo } from '../../../../types/api'
import { Info } from '../../../../components/info'
import { Widget } from '../../../../components/widget'
import { getImage, getPlaceInfo, getPlaces } from '../../../../apis/google'

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
					{place.photos && <Image style={styles.image} source={{ uri: getImage(place.photos[0].photo_reference) }} />}
					<Info
						text={place.name}
						comment={
							place.formatted_address.length > 30
								? place.formatted_address.substring(0, 30) + '...'
								: place.formatted_address
						}
					/>
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
	places: {
		height: '70%'
	},
	place: {
		paddingHorizontal: 15,
		paddingVertical: 10,
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		gap: 15
	},
	image: {
		borderRadius: 10,
		width: 50,
		height: 50
	}
})
