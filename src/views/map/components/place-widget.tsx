import { Dimensions, StyleSheet, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Widget } from '../../../components/widget'
import { PlaceButton } from '../../../components/place-button'
import { TripPlace } from '../../../types/trip'

export type PlaceWidgetProps = {
	place: TripPlace
}

export const PlaceWidget = ({ place }: PlaceWidgetProps) => {
	const navigation = useNavigation<any>()

	const onPress = async () => {}

	return (
		<View style={styles.container}>
			<Widget shadow style={styles.content}>
				<PlaceButton place={place.info} />
			</Widget>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		width: Dimensions.get('screen').width,
		paddingHorizontal: 20
	},
	content: {
		padding: 20
	}
})
