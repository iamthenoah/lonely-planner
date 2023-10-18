import { useState } from 'react'
import { View } from 'react-native'
import { CalendarHeader } from './components/calendar-header'
import { DaysTab } from './components/days-tab'
import { TripDay } from './components/trip-day'

export const CreateTripCalendar = () => {
	const [days, setDays] = useState(3)
	const [day, setDay] = useState(0)

	return (
		<View>
			<CalendarHeader />
			<DaysTab editable days={days} onDayChange={setDay} onDayAdd={setDays} />
			<TripDay editable pois={[]} />
		</View>
	)
}
