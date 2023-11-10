import React, { useState } from 'react'
import { Container } from '../../components/layout/container'
import { MapHeader } from './components/map-header'
import { RouteProp, useRoute } from '@react-navigation/native'
import { PlaceSection } from './components/place-section'
import { Map } from '../../components/map'
import { Trip } from '../../types/trip'
import { PlaceInfo } from '../../types/api'

export type TripMapParams = RouteProp<{
	params: { trip: Trip; day: number; index?: number }
}>

export const TripMap = () => {
	const { index, day, trip } = useRoute<TripMapParams>().params
	const [place, setPlace] = useState<PlaceInfo>()

	return (
		<Container>
			<MapHeader day={day} id={trip.id} />
			<Map place={place} />
			<PlaceSection index={index} places={trip.days[day].places} onPlaceChange={place => setPlace(place.info)} />
		</Container>
	)
}
