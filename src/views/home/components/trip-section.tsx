import { Title } from '../../../components/title'
import { MapWidget } from './map-widget'
import { Section } from '../../../components/layout/section'

export const TripSection = () => {
	return (
		<Section>
			<Title text="Current Trip" />
			<MapWidget title="Day 2" />
		</Section>
	)
}
