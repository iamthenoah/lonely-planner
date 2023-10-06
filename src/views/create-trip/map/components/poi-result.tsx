import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { Title } from '../../../../components/title'
import { Comment } from '../../../../components/comment'
import { Result } from '../../../../types/poi'

export type SearchResultProps = {
	result: Result
	onPress: (result: Result) => void
}

export const PoiSearchResult = ({ result, onPress }: SearchResultProps) => {
	return (
		<TouchableOpacity onPress={() => onPress(result)}>
			<View style={styles.container}>
				<Title text={result.poi.name} />
				<Comment text={result.address.freeformAddress} />
			</View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	container: {
		paddingVertical: 10
	}
})
