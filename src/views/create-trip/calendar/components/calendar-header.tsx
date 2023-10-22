import { useNavigation } from '@react-navigation/native'
import { IconButton } from '../../../../components/icon-button'
import { Header } from '../../../../components/layout/header'
import { Title } from '../../../../components/title'
import { removeTrip } from '../../../../storage'

export type CalendarHeaderProps = {
	id?: string
}

export const CalendarHeader = ({ id }: CalendarHeaderProps) => {
	const navigation = useNavigation()

	const onPress = () => {
		id && removeTrip(id).then(() => navigation.goBack())
	}

	return (
		<Header
			left={<IconButton icon="chevron-back" onPress={onPress} />}
			center={<Title text="Calendar" />}
			right={<IconButton icon="trash" onPress={onPress} />}
		/>
	)
}
