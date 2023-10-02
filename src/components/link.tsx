import { StyleSheet, Text, TouchableOpacity } from 'react-native'

export type LinkProps = {
	text: string
	onClick?: () => void
}

export const Link = ({ text, onClick }: LinkProps) => {
	const content = <Text style={styles.container}>{text}</Text>
	return onClick ? <TouchableOpacity onPress={onClick}>{content}</TouchableOpacity> : content
}

const styles = StyleSheet.create({
	container: {
		fontSize: 14,
		fontWeight: 'bold',
		color: '#0057D9'
	}
})
