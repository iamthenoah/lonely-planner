import { ScrollView } from 'react-native'
import { Section } from '../../../components/layout/section'
import { CreateTripWidget } from './create-trip-widget'
import { TripWidget } from './trip-widget'
import { Link } from '../../../components/link'

const trips = [
	{
		location: 'Italy',
		date: 'Sep 12, 2019',
		image: 'https://tourismmedia.italia.it/is/image/mitur/20220127150143-colosseo-roma-lazio-shutterstock-756032350-1'
	},
	{
		location: 'China',
		date: 'Sep 12, 2019',
		image: 'https://www.ciee.org/sites/default/files/images/2023-06/shanghai-busy-market-night_1.jpg'
	},
	{
		location: 'Korea',
		date: 'Sep 12, 2019',
		image: 'https://cdn.britannica.com/57/75757-050-122EC2ED/Changgyong-Palace-background-Seoul.jpg'
	},
	{
		location: 'Australia',
		date: 'Sep 12, 2019',
		image: 'https://wallpapercave.com/wp/wp2684740.jpg'
	},
	{
		location: 'Cambodia',
		date: 'Sep 12, 2019',
		image: 'https://www.eyeonasia.gov.sg/images/asean-countries/Cambodia%20snapshot%20cover.jpg'
	}
]

export const TripsSection = () => {
	return (
		<Section name="Trips" action={<Link text="view all" onClick={console.log} />}>
			<ScrollView horizontal>
				<CreateTripWidget />
				{trips.map(trip => (
					<TripWidget key={Math.random()} {...trip} />
				))}
			</ScrollView>
		</Section>
	)
}
