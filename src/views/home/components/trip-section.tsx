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

	return (
		<Section
			name="Current Trip"
			action={<Link text="view trip" onPress={() => navigation.navigate('/trip/create/journal', { id: trip.id })} />}
		>
			<CurrentTripWidget title="Day 2" />
		</Section>
	)
}
