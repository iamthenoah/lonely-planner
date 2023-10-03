import { StyleSheet, View } from 'react-native'
import { Content } from '../../../components/layout/content'
import { Info } from '../../../components/info'

export const MapHeader = () => {
	return (
		<Content scrollEnabled={false}>
			<View style={styles.container}>
				<Info text="Location" comment="Trip to Location" />
			</View>
		</Content>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'white',
		flex: 1
	}
})
