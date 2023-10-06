import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { Title } from '../../../components/title'
import { Comment } from '../../../components/comment'
import { Result } from '../../../types/poi'

export type SearchResultProps = {
	result: Result
	onClick: (result: Result) => void
}

export const PoiSearchResult = ({ result, onClick }: SearchResultProps) => {
	return (
		<TouchableOpacity onPress={() => onClick(result)}>
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
