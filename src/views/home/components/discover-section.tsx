import { DiscoverWidget } from './discover-widget'
import { Title } from '../../../components/elements/generics/title'
import { Section } from '../../../components/layouts/section'

const discover = [
	{
		name: 'City of Rome',
		location: 'Italy',
		image: 'https://tourismmedia.italia.it/is/image/mitur/20220127150143-colosseo-roma-lazio-shutterstock-756032350-1'
	},
	{
		name: 'Shanghai',
		location: 'China',
		image: 'https://www.ciee.org/sites/default/files/images/2023-06/shanghai-busy-market-night_1.jpg'
	},
	{
		name: 'Seoul',
		location: 'Korea',
		image: 'https://cdn.britannica.com/57/75757-050-122EC2ED/Changgyong-Palace-background-Seoul.jpg'
	},
	{
		name: 'Sydney',
		location: 'Australia',
		image: 'https://wallpapercave.com/wp/wp2684740.jpg'
	},
	{
		name: 'Angkor Wat',
		location: 'Cambodia',
		image: 'https://www.eyeonasia.gov.sg/images/asean-countries/Cambodia%20snapshot%20cover.jpg'
	}
]

export const DiscoverSection = () => {
	return (
		<Section>
			<Title text="Discover" />
			{discover.map(trip => (
				<DiscoverWidget key={Math.random()} {...trip} />
			))}
		</Section>
	)
}
