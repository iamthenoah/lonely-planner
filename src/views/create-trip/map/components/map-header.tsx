import { useEffect, useState } from 'react'
import { View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Title } from '../../../../components/title'
import { SearchBar } from '../../../../components/search-bar'
import { Header } from '../../../../components/layout/header'
import { Result } from '../../../../types/poi'
import { PoiSearchResult } from './poi-result'
import { IconButton } from '../../../../components/icon-button'
import * as Location from 'expo-location'
import axios from 'axios'

export type MapHeaderProps = {
	onPoi: (result: Result | null) => void
}

export const MapHeader = ({ onPoi }: MapHeaderProps) => {
	const navigation = useNavigation()
	const [location, setLocation] = useState<Location.LocationObject | null>(null)
	const [results, setResults] = useState<Result[]>([])

	useEffect(() => {
		Location.getCurrentPositionAsync().then(setLocation)
	}, [])

	const onSearchPoi = async (value: string) => {
		onPoi(null)
		let url = 'https://api.tomtom.com/search/2/poiSearch/' + value + '.json?key=xbut0FprHUpkK7BOoLxLzPYg6mDGOWyA'

		if (location) {
			url += '&lon=' + location.coords.longitude + '&lat=' + location.coords.latitude
		}

		axios
			.get(url)
			.then(res => res.data.results)
			.catch(() => [])
			.then(setResults)
	}

	const onPoiSelected = (result: Result) => {
		onPoi(result)
		setResults([])
	}

	return (
		<View>
			<Header left={<IconButton icon="close" onPress={navigation.goBack} />} center={<Title text="Day 2" />}>
				<SearchBar placeholder="Search Location" onSubmit={onSearchPoi} />
			</Header>
			{results.map(result => (
				<PoiSearchResult key={Math.random()} result={result} onPress={onPoiSelected} />
			))}
		</View>
	)
}
