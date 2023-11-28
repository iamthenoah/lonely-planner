import { useNavigation } from '@react-navigation/native'
import { Info } from '../../../../components/info'
import { IconButton } from '../../../../components/icon-button'
import { Header } from '../../../../components/layout/header'

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
