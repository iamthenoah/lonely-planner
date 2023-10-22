import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'

export type AddPlaceButtonProps = {
	id: string
	day: number
}

export const AddPlaceButton = ({ id, day }: AddPlaceButtonProps) => {
	const navigation = useNavigation<any>()

	return (
		<TouchableOpacity style={styles.container} onPress={() => navigation.navigate('/trip/create/map', { id, day })}>
			<Ionicons size={20} color="#0057D9" name="add" />
			<Text style={styles.text}>Add Location</Text>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: '100%',
		display: 'flex',
		flexDirection: 'row',
		margin: 20,
		gap: 20
	},
	text: {
		fontSize: 16,
		fontWeight: 'bold',
		color: '#0057D9'
	}
})
