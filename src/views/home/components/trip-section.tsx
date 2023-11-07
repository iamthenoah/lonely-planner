import { CurrentTripWidget } from './current-trip-widget'
import { Section } from '../../../components/layout/section'
import { Link } from '../../../components/link'
import { useNavigation } from '@react-navigation/native'
import { Trip } from '../../../types/trip'
import { Content } from '../../../components/layout/content'

export const getCurrentTripDay = (trip: Trip) => {
	const start = new Date(trip.dates.start)
	const delta = new Date().getTime() - start.getTime()
	const days = Math.ceil(delta / (1000 * 3600 * 24))
	return days
}

export const getNextPlace = (trip: Trip) => {
	const day = getCurrentTripDay(trip)
	const current = new Date().getTime()
	const places = trip.days[day - 1]?.places

	if (places) {
		for (const place of places) {
			const time = new Date(place.time).getTime()

			if (time >= current) {
				return place
			}
		}
		return places[places.length - 1]
	}
}

export type CurrentTripSectionProps = {
	trip: Trip
}

export const CurrentTripSection = ({ trip }: CurrentTripSectionProps) => {
	const navigation = useNavigation<any>()

	const onPress = () => {
		navigation.navigate('/trip/create/journal', { id: trip.id, day: getCurrentTripDay(trip) - 1 })
	}

	return (
		<Content>
			<Section name="Current Trip" action={<Link text="view day" onPress={onPress} />}>
				<CurrentTripWidget title={'Day ' + getCurrentTripDay(trip)} place={getNextPlace(trip)} />
			</Section>
		</Content>
	)
}
