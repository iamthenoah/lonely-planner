import { StyleSheet, Text } from 'react-native'

export type ParagraphProps = {
	text: string
}

export const Paragraph = ({ text }: ParagraphProps) => {
	return <Text style={styles.container}>{text}</Text>
}

const styles = StyleSheet.create({
	container: {
		fontSize: 16,
		fontWeight: 'bold',
		color: '#BEBEBE'
	}
})
