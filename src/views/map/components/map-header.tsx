import { useState } from 'react'
import { Content } from '../../../components/layout/content'
import { Title } from '../../../components/title'
import { SearchBar } from '../../../components/search-bar'
import { Result } from '../../../types/poi'
import { PoiSearchResult } from './poi-result'
import axios from 'axios'

export const MapHeader = () => {
	const [results, setResults] = useState<Result[]>([])

	const searchPoi = async (value: string) => {
		const url = 'https://api.tomtom.com/search/2/poiSearch/'

		axios
			.get(url + value + '.json?key=xbut0FprHUpkK7BOoLxLzPYg6mDGOWyA')
			.then(res => res.data.results)
			.catch(() => [])
			.then(setResults)
	}

	return (
		<Content scrollEnabled={false}>
			<Title text="Day 2" />
			<SearchBar placeholder="Search Location" onSubmit={searchPoi} />
			{results.map(result => (
				<PoiSearchResult key={Math.random()} result={result} onClick={console.log} />
			))}
		</Content>
	)
}
