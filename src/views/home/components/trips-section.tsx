import { ScrollView } from 'react-native'
import { Title } from '../../../components/title'
import { Section } from '../../../components/layout/section'
import { TripWidget } from './trip-widget'

export const TripsSection = () => {
	return (
		<Section>
			<Title text="Trips" />
			<ScrollView horizontal>
				<TripWidget />
				<TripWidget />
				<TripWidget />
				<TripWidget />
			</ScrollView>
		</Section>
	)
}
