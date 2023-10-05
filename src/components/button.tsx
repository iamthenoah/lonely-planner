import { StyleSheet, TouchableOpacity, Text, View } from 'react-native'
import { Shadow } from './shadow'

export type ButtonProps = {
	text: string
	onClick: () => void
	color?: string
	shadow?: boolean
}

export const Button = ({ text, onClick, color = '#0057D9', shadow }: ButtonProps) => {
	let content = (
		<View style={{ ...styles.container, backgroundColor: color }}>
			<Text style={styles.text}>{text}</Text>
		</View>
	)

	if (shadow) {
		content = <Shadow>{content}</Shadow>
	}
	return <TouchableOpacity onPress={onClick}>{content}</TouchableOpacity>
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
