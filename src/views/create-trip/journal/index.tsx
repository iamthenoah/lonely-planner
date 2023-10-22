import { useState } from 'react'
import { RouteProp, useRoute } from '@react-navigation/native'
import { View } from 'react-native'
import { JournalHeader } from './components/journal-header'
import { DaysTab } from './components/days-tab'
import { TripDayPanel } from './components/trip-day-panel'
import { useTrips } from '../../../contexts/trip-context'

export type CreateTripJournalParams = RouteProp<{
	params: { id: string; day?: number }
}>

export const CreateTripJournal = () => {
	const trips = useTrips()
	const route = useRoute<CreateTripJournalParams>()
	const [day, setDay] = useState(route.params.day || 0)

	const id = route.params.id
	const trip = trips.get(id)

	const appendDay = () => {
		trips.update(id, trip => trip.days.push({ places: [] }))
	}

	if (!trip) {
		return <View />
	}

	return (
		<View>
			<JournalHeader id={id} />
			<DaysTab editable days={trip.days.length} onDayChange={setDay} onDayAdd={appendDay} />
			<TripDayPanel editable id={id} day={{ ...trip.days[day], index: day }} />
		</View>
	)
}
