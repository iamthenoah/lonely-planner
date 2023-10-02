import { MapWidget } from './map-widget'
import { Section } from '../../../components/layout/section'

export const TripSection = () => {
	return (
		<Section name="Current Trip">
			<MapWidget title="Day 2" />
		</Section>
	)
}
