import { useNavigation } from '@react-navigation/native'
import { IconButton } from '../../../components/icon-button'
import { Header } from '../../../components/layout/header'
import { Title } from '../../../components/title'

export type MapHeaderProps = {
	id: string
	day: number
}

export const MapHeader = ({ id, day }: MapHeaderProps) => {
	const navigation = useNavigation<any>()

	return (
		<Header
			left={<IconButton icon="chevron-back" onPress={navigation.goBack} />}
			center={<Title text={'Day ' + (day + 1)} />}
			right={<IconButton icon="map-outline" onPress={() => navigation.navigate('/trip/journal', { id, day })} />}
		/>
	)
}
