import React, { useState } from 'react'
import { View } from 'react-native'
import { DaysTab } from '../journal/components/days-tab'
import { TripDayPanel } from '../journal/components/trip-day-panel'
import { RouteProp, useRoute } from '@react-navigation/native'
import { Trip } from '../../../types/trip'
import { DiscoverHeader } from './components/discover-header'
import { DiscoverFooter } from './components/discover-footer'
import { Modal } from '../../../components/layout/modal'

const discover = require('../../../assets/trips.json') as Trip[]

export type DiscoverParams = RouteProp<{
	params: { id: string }
}>

export const Discover = () => {
	const route = useRoute<DiscoverParams>()
	const [day, setDay] = useState(0)

	const trip = discover.find(trip => trip.id === route.params.id)!

	if (!trip) {
		return <View />
	}

	return (
		<Modal>
			<DiscoverHeader place={trip.place.name} />
			<DaysTab days={trip.days.length} onDayChange={setDay} onDayAdded={() => {}} />
			<TripDayPanel id={null as any} day={{ ...trip.days[day], index: day }} onDayRemoved={() => {}} />
			<DiscoverFooter trip={trip} />
		</Modal>
	)
}
