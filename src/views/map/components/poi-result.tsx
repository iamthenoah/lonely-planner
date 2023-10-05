import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { Title } from '../../../components/title'
import { Comment } from '../../../components/comment'
import { Result } from '../../../types/poi'

export type SearchResultProps = {
	result: Result
	onClick: (result: string) => void
}

export const PoiSearchResult = ({ result }: SearchResultProps) => {
	return (
		<TouchableOpacity onPress={console.log}>
			<View style={styles.container}>
				<Title text={result.poi.name} />
				<Comment text={result.address.freeformAddress} />
			</View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingVertical: 10
	}
})
