import { StyleSheet, Text, TouchableOpacity } from 'react-native'

export type LinkProps = {
	text: string
	onPress?: () => void
}

export const Link = ({ text, onPress }: LinkProps) => {
	const content = <Text style={styles.container}>{text}</Text>
	return onPress ? <TouchableOpacity onPress={onPress}>{content}</TouchableOpacity> : content
}

const styles = StyleSheet.create({
	container: {
		fontSize: 14,
		fontWeight: 'bold',
		color: '#0057D9'
	}
})
