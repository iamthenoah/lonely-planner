import { StyleSheet, View } from 'react-native'
import { Title } from '../../../../components/title'
import { TripPoi } from '../../../../types/trip'

export type PoiWidgetProps = {
	poi: TripPoi
}

export const PoiWidget = ({ poi }: PoiWidgetProps) => {
	return (
		<View style={styles.container}>
			<Title text={poi.name} />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		padding: 10
	}
})
