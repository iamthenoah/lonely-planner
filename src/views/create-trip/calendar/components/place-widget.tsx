import { StyleSheet, View } from 'react-native'
import { Title } from '../../../../components/title'
import { PlaceInfo } from '../../../../types/api'

export type PlaceWidgetProps = {
	place: PlaceInfo
}

export const PlaceWidget = ({ place }: PlaceWidgetProps) => {
	return (
		<View style={styles.container}>
			<Title text={place.name} />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		padding: 10
	}
})
