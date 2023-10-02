import { Title } from '../../../components/elements/generics/title'
import { MapWidget } from './map-widget'
import { Section } from '../../../components/layouts/section'

export const TripSection = () => {
	return (
		<Section>
			<Title text="Current Trip" />
			<MapWidget title="Day 2" />
		</Section>
	)
}
