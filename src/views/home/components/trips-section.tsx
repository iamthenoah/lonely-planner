import { ScrollView } from 'react-native'
import { Title } from '../../../components/elements/generics/title'
import { Section } from '../../../components/layouts/section'
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
