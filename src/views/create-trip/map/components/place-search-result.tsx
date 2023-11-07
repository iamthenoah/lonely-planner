import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { Place } from '../../../../types/api'
import { Info } from '../../../../components/info'

export type SearchResultProps = {
	place: Place
	onPress: (place: Place) => void
}

export const PlaceSearchResult = ({ place, onPress }: SearchResultProps) => {
	return (
		<TouchableOpacity onPress={() => onPress(place)}>
			<View style={styles.container}>
				<Info
					flipped
					text={place.structured_formatting.main_text}
					comment={place.structured_formatting.secondary_text}
				/>
			</View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	container: {
		paddingVertical: 10,
		paddingHorizontal: 25
	}
})
