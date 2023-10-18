import { useNavigation } from '@react-navigation/native'
import { IconButton } from '../../../../components/icon-button'
import { Header } from '../../../../components/layout/header'
import { Title } from '../../../../components/title'

export const CalendarHeader = () => {
	const navigation = useNavigation()

	return (
		<Header
			left={<IconButton icon="chevron-back" onPress={() => navigation.goBack()} />}
			center={<Title text="Calendar" />}
			right={<IconButton icon="close" onPress={() => navigation.navigate('/home' as never)} />}
		/>
	)
}
