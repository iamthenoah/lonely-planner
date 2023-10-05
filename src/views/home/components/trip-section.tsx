import { CurrentTripWidget } from './current-trip-widget'
import { Section } from '../../../components/layout/section'
import { Link } from '../../../components/link'

export const CurrentTripSection = () => {
	return (
		<Section name="Current Trip" action={<Link text="view trip" onClick={console.log} />}>
			<CurrentTripWidget title="Day 2" />
		</Section>
	)
}
