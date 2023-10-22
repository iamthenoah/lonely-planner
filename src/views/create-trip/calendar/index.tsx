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

	const appendDay = () => {
		trips.update(route.params.id, trip => trip.days.push({ places: [] }))
	}

	const getTrip = () => {
		return trips.getTrip(route.params.id)!
	}

	return (
		<View>
			<CalendarHeader id={getTrip().id} />
			<DaysTab editable days={getTrip().days.length || 1} onDayChange={setDay} onDayAdd={appendDay} />
			<TripDayPanel editable id={route.params.id} day={{ ...getTrip().days[day], index: day }} />
		</View>
	)
}
