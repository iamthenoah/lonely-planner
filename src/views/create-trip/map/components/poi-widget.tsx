import { SafeAreaView } from 'react-native-safe-area-context'
import { StyleSheet, View } from 'react-native'
import { Title } from '../../../../components/title'
import { Result } from '../../../../types/poi'
import { Button } from '../../../../components/button'
import { Widget } from '../../../../components/widget'
import { Comment } from '../../../../components/comment'

export type PoiWidgetProps = {
	poi: Result
}

export const PoiWidget = ({ poi }: PoiWidgetProps) => {
	return (
		<SafeAreaView style={styles.container}>
			<Widget shadow style={styles.content}>
				<View style={styles.text}>
					<Title text={poi.poi.name} />
					<Comment text={poi.address.freeformAddress} />
				</View>
				<Button text="Add Location" onPress={console.log} />
			</Widget>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		position: 'absolute',
		paddingHorizontal: 20,
		width: '100%',
		bottom: 0
	},
	content: {
		padding: 20
	},
	text: {
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 20
	}
})
