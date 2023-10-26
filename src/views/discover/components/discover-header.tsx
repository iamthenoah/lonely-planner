import { useNavigation } from '@react-navigation/native'
import { Header } from 'react-native/Libraries/NewAppScreen'
import { Info } from '../../../components/info'
import { IconButton } from '../../../components/icon-button'

export type DiscoverHeaderProps = {
	place: string
}

export const DiscoverHeader = ({ place }: DiscoverHeaderProps) => {
	const navigation = useNavigation<any>()

	return (
		<Header
			left={<Info text={place} comment="Trip to" />}
			right={<IconButton icon="close" onPress={() => navigation.goBack()} />}
		/>
	)
}
