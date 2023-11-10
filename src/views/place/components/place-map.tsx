import { PlaceInfo } from '../../../types/api'
import { StyleSheet, View } from 'react-native'
import { Widget } from '../../../components/widget'
import { Content } from '../../../components/layout/content'
import { Title } from '../../../components/title'
import { Map } from '../../../components/map'

export type PlaceMapProps = {
	place: PlaceInfo
}

export const PlaceMap = ({ place }: PlaceMapProps) => {
	return (
		<Content>
			<View style={styles.container}>
				<Title text="Map" />
				<Widget>
					<Map style={styles.map} place={place} interactive={false} />
				</Widget>
			</View>
		</Content>
	)
}

const styles = StyleSheet.create({
	container: {
		gap: 10,
		display: 'flex',
		marginVertical: 20
	},
	map: {
		width: '100%',
		height: 200
	}
})
