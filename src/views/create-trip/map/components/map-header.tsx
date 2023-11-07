import { useState } from 'react'
import { View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Title } from '../../../../components/title'
import { SearchBar } from '../../../../components/search-bar'
import { Header } from '../../../../components/layout/header'
import { PlaceSearchResult } from './place-search-result'
import { IconButton } from '../../../../components/icon-button'
import { Place, PlaceInfo } from '../../../../types/api'
import { getPlaceInfo, getPlaces } from '../../../../apis/google'
import { useTrips } from '../../../../contexts/trip-context'

export type MapHeaderProps = {
	id: string
	day: number
	index: number
	onPlace: (place: PlaceInfo | null) => void
}

export const MapHeader = ({ id, day, index, onPlace }: MapHeaderProps) => {
	const navigation = useNavigation()
	const trips = useTrips()
	const [places, setPlaces] = useState<Place[]>([])

	const onSearchPlaces = async (input: string) => {
		onPlace(null)
		getPlaces(input).then(setPlaces)
	}

	const onSelectPlace = (place: Place) => {
		getPlaceInfo(place.place_id).then(onPlace)
		setPlaces([])
	}

	const onClose = () => {
		trips
			.update(id, trip => (trip.days[day].places = trip.days[day].places.filter((_, i) => i !== index)))
			.then(navigation.goBack)
	}

	return (
		<View>
			<Header left={<IconButton icon="chevron-back" onPress={onClose} />} center={<Title text="Select Location" />}>
				<SearchBar placeholder="Search Location" onSubmit={onSearchPlaces} />
			</Header>
			{places.map(place => (
				<PlaceSearchResult key={Math.random()} place={place} onPress={onSelectPlace} />
			))}
		</View>
	)
}
