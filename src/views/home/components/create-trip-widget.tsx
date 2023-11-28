import { StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Widget } from '../../../components/widget'
import { Link } from '../../../components/link'

export const CreateTripWidget = () => {
	const navigation = useNavigation()

	return (
		<Widget style={styles.container} onPress={() => navigation.navigate('/trip/form' as never)}>
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
