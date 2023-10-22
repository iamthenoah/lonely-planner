import { useState } from 'react'
import { RouteProp, useRoute } from '@react-navigation/native'
import { View } from 'react-native'
import { CalendarHeader } from './components/calendar-header'
import { DaysTab } from './components/days-tab'
import { TripDayPanel } from './components/trip-day-panel'
import { useTrips } from '../../../contexts/trip-context'

export type CreateTripCalendarParams = RouteProp<{
	params: { id: string; day?: number }
}>

export const CreateTripCalendar = () => {
	const trips = useTrips()
	const route = useRoute<CreateTripCalendarParams>()
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
			<CalendarHeader id={id} />
			<DaysTab editable days={trip.days.length} onDayChange={setDay} onDayAdd={appendDay} />
			<TripDayPanel editable id={id} day={{ ...trip.days[day], index: day }} />
		</View>
	)
}
