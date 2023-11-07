import { useNavigation } from '@react-navigation/native'
import { Comment } from '../../../components/comment'
import { IconButton } from '../../../components/icon-button'
import { Header } from '../../../components/layout/header'
import { PlaceInfo } from '../../../types/api'
import { StyleSheet, Text, View } from 'react-native'
import { truncate } from '../../../components/place-button'

export type PlaceHeaderProps = {
	place: PlaceInfo
}

export const PlaceHeader = ({ place }: PlaceHeaderProps) => {
	const navigation = useNavigation<any>()

	return (
		<Header
			left={<Text style={styles.container}>{truncate(place.name, 30)}</Text>}
			right={<IconButton icon="close" onPress={navigation.goBack} />}
		/>
	)
}

const styles = StyleSheet.create({
	container: {
		fontSize: 28,
		fontWeight: 'bold',
		color: '#6A6A6A'
	}
})
