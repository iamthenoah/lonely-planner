import { StyleSheet } from 'react-native'
import { Widget } from '../../../components/widget'
import { Link } from '../../../components/link'

export const CreateTripWidget = () => {
	return (
		<Widget style={styles.container} onPress={console.log}>
			<Link text="create" />
		</Widget>
	)
}

const styles = StyleSheet.create({
	container: {
		width: 100,
		height: 100,
		alignItems: 'center',
		justifyContent: 'center'
	}
})
