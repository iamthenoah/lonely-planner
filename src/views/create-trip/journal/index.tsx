import { useState } from 'react'
import { RouteProp, useRoute } from '@react-navigation/native'
import { JournalHeader } from './components/journal-header'
import { DaysTab } from './components/days-tab'
import { TripDayPanel } from './components/trip-day-panel'
import { useTrips } from '../../../contexts/trip-context'
import { useNavigation } from '@react-navigation/native'
import { Container } from '../../../components/layout/container'

export type CreateTripJournalParams = RouteProp<{
	params: { id: string; day?: number; home?: boolean }
}>

export const CreateTripJournal = () => {
	const navigation = useNavigation<any>()
	const trips = useTrips()
	const { id, day: today, home } = useRoute<CreateTripJournalParams>().params
	const [day, setDay] = useState(today || 0)

	const trip = trips.get(id)

	const appendDay = () => {
		trips.update(id, trip => trip.days.push({ places: [] }))
	}

	const removeDay = async () => {
		if (trip?.days.length === 0) {
			trips.remove(id).then(() => navigation.navigate('/home'))
		} else {
			setDay(0)
		}
	}

	if (!trip || trip?.days.length === 0) {
		return undefined
	}

	return (
		<Container>
			<JournalHeader id={id} home={home} />
			<DaysTab editable days={trip.days.length} onDayChange={setDay} onDayAdded={appendDay} initTab={day} />
			<TripDayPanel editable id={id} day={{ ...trip.days[day], index: day }} onDayRemoved={removeDay} />
		</Container>
	)
}
