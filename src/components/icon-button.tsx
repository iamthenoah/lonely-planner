import { StyleSheet, TouchableOpacity } from 'react-native'
import { Entypo } from '@expo/vector-icons'

export type IconButtonProps = {
	icon: string
	onPress: () => void
}

export const IconButton = ({ icon, onPress }: IconButtonProps) => {
	return (
		<TouchableOpacity style={styles.container} onPress={onPress}>
			<Entypo size={20} color="#0057D9" name={icon as any} />
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	container: {
		borderRadius: 100,
		width: 40,
		height: 40,
		borderWidth: 2,
		borderColor: '#EDEEEF',
		backgroundColor: 'white',
		alignItems: 'center',
		justifyContent: 'center'
	}
})
