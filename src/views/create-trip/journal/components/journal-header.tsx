import { useNavigation } from '@react-navigation/native'
import { IconButton } from '../../../../components/icon-button'
import { Header } from '../../../../components/layout/header'
import { Title } from '../../../../components/title'
import { useTrips } from '../../../../contexts/trip-context'

export type JournalHeaderProps = {
	id: string
	home?: boolean
}

export const JournalHeader = ({ id, home }: JournalHeaderProps) => {
	const trips = useTrips()
	const navigation = useNavigation<any>()

	const onPress = () => {
		trips.remove(id).then(() => navigation.navigate('/home'))
	}

	return (
		<Header
			left={
				<IconButton icon="chevron-back" onPress={() => (home ? navigation.navigate('/home') : navigation.goBack())} />
			}
			center={<Title text="Journal" />}
			right={<IconButton icon="trash" color="red" onPress={onPress} />}
		/>
	)
}
