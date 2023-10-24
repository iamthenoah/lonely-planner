import { useEffect, useState } from 'react'
import { View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Title } from '../../../../components/title'
import { SearchBar } from '../../../../components/search-bar'
import { Header } from '../../../../components/layout/header'
import { PlaceSearchResult } from './place-search-result'
import { IconButton } from '../../../../components/icon-button'
import * as Location from 'expo-location'
import { Place, PlaceInfo } from '../../../../types/api'
import { getPlaceInfo, getPlaces } from '../../../../apis/google'

export type MapHeaderProps = {
	onPlace: (place: PlaceInfo | null) => void
}

export const MapHeader = ({ onPlace }: MapHeaderProps) => {
	const navigation = useNavigation()
	const [location, setLocation] = useState<Location.LocationObject | null>(null)
	const [places, setPlaces] = useState<Place[]>([])

	useEffect(() => {
		Location.getCurrentPositionAsync().then(setLocation)
	}, [])

	const onSearchPlaces = async (input: string) => {
		onPlace(null)
		getPlaces(input).then(setPlaces)
	}

	const onSelectPlace = (place: Place) => {
		getPlaceInfo(place.place_id).then(onPlace)
		setPlaces([])
	}

	return (
		<View>
			<Header left={<IconButton icon="close" onPress={navigation.goBack} />} center={<Title text="Select Location" />}>
				<SearchBar placeholder="Search Location" onSubmit={onSearchPlaces} />
			</Header>
			{places.map(place => (
				<PlaceSearchResult key={Math.random()} place={place} onPress={onSelectPlace} />
			))}
		</View>
	)
}
