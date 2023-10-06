import { useState } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { PoiSearchResult } from '../../map/components/poi-result'
import { SearchBar } from '../../../../components/search-bar'
import { Result } from '../../../../types/poi'
import { Info } from '../../../../components/info'
import { Widget } from '../../../../components/widget'
import axios from 'axios'

export type LocationFormProps = {
	poi?: Result | null
	onLocation: (result: Result | null) => void
}

export const LocationForm = ({ poi, onLocation }: LocationFormProps) => {
	const [results, setResults] = useState<Result[]>([])

	const onSearchLocation = (text: string) => {
		onLocation(null)
		const url = 'https://api.tomtom.com/search/2/poiSearch/' + text + '.json?key=xbut0FprHUpkK7BOoLxLzPYg6mDGOWyA'

		axios
			.get(url)
			.then(res => res.data.results)
			.catch(() => [])
			.then(setResults)
	}

	const onPress = (result: Result) => {
		onLocation(result)
		setResults([])
	}

	return (
		<View style={styles.container}>
			<SearchBar onSubmit={onSearchLocation} placeholder="Search Location" />
			{results.length !== 0 && (
				<ScrollView style={styles.results}>
					{results.map(result => (
						<PoiSearchResult key={Math.random()} result={result} onPress={onPress} />
					))}
				</ScrollView>
			)}
			{poi && (
				<Widget style={styles.location}>
					<Info text={poi.poi.name} comment={poi.address.freeformAddress} />
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
		justifyContent: 'space-around'
	},
	location: {
		paddingHorizontal: 20,
		paddingVertical: 10
	},
	results: {
		height: '70%'
	}
})
