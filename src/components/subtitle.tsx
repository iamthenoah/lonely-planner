import { StyleSheet, Text } from 'react-native'

export type SubtitleProps = {
	text: string
}

export const Subtitle = ({ text }: SubtitleProps) => {
	return <Text style={styles.container}>{text}</Text>
}

const styles = StyleSheet.create({
	container: {
		fontSize: 16,
		fontWeight: 'bold',
		color: '#6A6A6A'
	}
})
