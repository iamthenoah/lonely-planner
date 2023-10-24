import { DiscoverWidget } from './discover-widget'
import { Section } from '../../../components/layout/section'
import { Trip } from '../../../types/trip'

const discover = require('../../../assets/trips.json') as Trip[]

export const DiscoverSection = () => {
	return (
		<Section name="Discover">
			{discover.map(trip => (
				<DiscoverWidget key={Math.random()} trip={trip} />
			))}
		</Section>
	)
}
