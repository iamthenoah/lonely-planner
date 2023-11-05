import { CurrentTripWidget } from './current-trip-widget'
import { Section } from '../../../components/layout/section'
import { Link } from '../../../components/link'
import { useNavigation } from '@react-navigation/native'
import { Trip } from '../../../types/trip'

export type CurrentTripSectionProps = {
	trip: Trip
}

export const CurrentTripSection = ({ trip }: CurrentTripSectionProps) => {
	const navigation = useNavigation<any>()

	const getDayText = () => {
		const today = new Date()
		const start = new Date(trip.dates.start)
		const delta = start.getTime() - today.getTime()
		const days = Math.ceil(delta / (1000 * 3600 * 24))
		return `Day ${days + 1}`
	}

	return (
		<Section
			name="Current Trip"
			action={<Link text="view trip" onPress={() => navigation.navigate('/trip/create/journal', { id: trip.id })} />}
		>
			<CurrentTripWidget title={getDayText()} />
		</Section>
	)
}
