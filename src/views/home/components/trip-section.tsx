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
	return days - 1
}

export const getNextPlace = (trip: Trip) => {
	const day = getCurrentTripDay(trip)
	const current = new Date().getTime()
	const places = trip.days[day]?.places

	if (places) {
		for (let i = 0; i < places.length; i++) {
			const place = places[i]
			const time = new Date(place.time).getTime()

			if (time >= current) {
				return i
			}
		}
		return places.length - 1
	}
	return -1
}

export type CurrentTripSectionProps = {
	trip: Trip
}

export const CurrentTripSection = ({ trip }: CurrentTripSectionProps) => {
	const navigation = useNavigation<any>()
	const day = getCurrentTripDay(trip)

	const onPress = () => {
		navigation.navigate('/trip/create/journal', { id: trip.id, day })
	}

	return (
		<Content>
			<Section name="Current Trip" action={<Link text="view day" onPress={onPress} />}>
				<CurrentTripWidget trip={trip} day={day} index={getNextPlace(trip)} />
			</Section>
		</Content>
	)
}
