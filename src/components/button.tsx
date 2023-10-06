import { StyleSheet, TouchableOpacity, Text, View } from 'react-native'
import { Shadow } from './shadow'

export type ButtonProps = {
	text: string
	onPress: () => void
	foreground?: string
	background?: string
	shadow?: boolean
	disabled?: boolean
}

export const Button = ({
	text,
	onPress,
	background = '#0057D9',
	foreground = 'white',
	shadow,
	disabled
}: ButtonProps) => {
	let content = (
		<View style={{ ...styles.container, backgroundColor: background }}>
			<Text style={{ ...styles.text, color: foreground }}>{text}</Text>
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
		fontSize: 16,
		fontWeight: 'bold',
		textAlign: 'center'
	}
})
