import { CurrentTripWidget } from './current-trip-widget'
import { Section } from '../../../components/layout/section'
import { Link } from '../../../components/link'
import { useNavigation } from '@react-navigation/native'
import { Trip } from '../../../types/trip'

export const getCurrentTripDay = (trip: Trip) => {
	const start = new Date(trip.dates.start)
	const delta = start.getTime() - new Date().getTime()
	const days = Math.ceil(delta / (1000 * 3600 * 24))
	return days + 1
}

export type CurrentTripSectionProps = {
	trip: Trip
}

export const CurrentTripSection = ({ trip }: CurrentTripSectionProps) => {
	const navigation = useNavigation<any>()

	return (
		<Section
			name="Current Trip"
			action={
				<Link
					text="view trip"
					onPress={() => navigation.navigate('/trip/create/journal', { id: trip.id, day: getCurrentTripDay(trip) - 1 })}
				/>
			}
		>
			<CurrentTripWidget title={'Day ' + getCurrentTripDay(trip)} />
		</Section>
	)
}
