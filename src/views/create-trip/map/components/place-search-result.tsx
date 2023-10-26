import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { Title } from '../../../../components/title'
import { Comment } from '../../../../components/comment'
import { Place } from '../../../../types/api'

export type SearchResultProps = {
	place: Place
	onPress: (place: Place) => void
}

export const PlaceSearchResult = ({ place, onPress }: SearchResultProps) => {
	return (
		<TouchableOpacity onPress={() => onPress(place)}>
			<View style={styles.container}>
				<Title text={place.structured_formatting.main_text} />
				<Comment text={place.structured_formatting.secondary_text} />
			</View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	container: {
		paddingVertical: 10
	}
})
