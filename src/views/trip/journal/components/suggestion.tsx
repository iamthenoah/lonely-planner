import { StyleSheet, View } from 'react-native'
import { PlaceInfo } from '../../../../types/api'
import { Title } from '../../../../components/title'

export type SuggestionProps = {
	place: PlaceInfo
}

export const Suggestion = ({ place }: SuggestionProps) => {
	return (
		<View style={styles.container}>
			<Title text={place.formatted_address} />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		borderRadius: 20,
		backgroundColor: '#d3e5ff'
	}
})
