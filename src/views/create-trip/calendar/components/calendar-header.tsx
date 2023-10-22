import { useNavigation } from '@react-navigation/native'
import { IconButton } from '../../../../components/icon-button'
import { Header } from '../../../../components/layout/header'
import { Title } from '../../../../components/title'
import { useTrips } from '../../../../contexts/trip-context'

export type CalendarHeaderProps = {
	id: string
}

export const CalendarHeader = ({ id }: CalendarHeaderProps) => {
	const trips = useTrips()
	const navigation = useNavigation<any>()

	const onPress = () => {
		trips.remove(id).then(() => navigation.navigate('/home'))
	}

	return (
		<Header
			left={<IconButton icon="chevron-back" onPress={() => navigation.navigate('/home')} />}
			center={<Title text="Calendar" />}
			right={<IconButton icon="trash" onPress={onPress} />}
		/>
	)
}
