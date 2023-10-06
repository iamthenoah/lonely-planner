import { StyleSheet, TouchableOpacity, Text, View } from 'react-native'
import { Shadow } from './shadow'

export type ButtonProps = {
	text: string
	onPress: () => void
	color?: string
	shadow?: boolean
	disabled?: boolean
}

export const Button = ({ text, onPress, color = '#0057D9', shadow, disabled }: ButtonProps) => {
	let content = (
		<View style={{ ...styles.container, backgroundColor: color }}>
			<Text style={styles.text}>{text}</Text>
		</View>
	)

	if (shadow) {
		content = <Shadow>{content}</Shadow>
	}
	return (
		<TouchableOpacity disabled={disabled} onPress={onPress} style={{ opacity: disabled ? 0.5 : 1 }}>
			{content}
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	container: {
		borderRadius: 15
	},
	text: {
		padding: 15,
		color: 'white',
		fontSize: 16,
		fontWeight: 'bold',
		textAlign: 'center'
	}
})
