import { StyleSheet, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export type IconButtonProps = {
	icon: string
	color?: string
	onPress: () => void
	seamless?: boolean
}

export const IconButton = ({ icon, color = '#0057D9', seamless, onPress }: IconButtonProps) => {
	return (
		<TouchableOpacity style={{ ...styles.container, borderColor: seamless ? 'white' : '#EDEEEF' }} onPress={onPress}>
			<Ionicons size={20} color={color} name={icon as any} />
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	container: {
		borderRadius: 100,
		width: 40,
		height: 40,
		borderWidth: 2,
		backgroundColor: 'white',
		alignItems: 'center',
		justifyContent: 'center'
	}
})
