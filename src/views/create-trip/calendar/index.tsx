import { useEffect, useState } from 'react'
import { RouteProp, useRoute } from '@react-navigation/native'
import { View } from 'react-native'
import { CalendarHeader } from './components/calendar-header'
import { DaysTab } from './components/days-tab'
import { TripDayPanel } from './components/trip-day-panel'
import { Trip } from '../../../types/trip'
import { getTrip } from '../../../storage'

export type CreateTripCalendarParams = RouteProp<{
	params: { id: string; day?: number }
}>

export const CreateTripCalendar = () => {
	const route = useRoute<CreateTripCalendarParams>()

	const [day, setDay] = useState(route.params.day || 0)
	const [trip, setTrip] = useState<Trip | null>()

	useEffect(() => {
		getTrip(route.params.id).then(setTrip)
	})

	const appendDay = () => {
		trip?.days.push({ pois: [] })
		setTrip(trip)
	}

	return (
		<View>
			<CalendarHeader />
			<DaysTab editable days={trip?.days.length || 1} onDayChange={setDay} onDayAdd={appendDay} />
			<TripDayPanel editable id={route.params.id} day={{ ...(trip?.days[day] || { pois: [] }), number: day }} />
		</View>
	)
}
