import { StyleSheet, Text } from 'react-native'

export type CommentProps = {
	text: string
}

export const Comment = ({ text }: CommentProps) => {
	return <Text style={styles.container}>{text}</Text>
}

const styles = StyleSheet.create({
	container: {
		fontSize: 12,
		fontWeight: 'bold',
		color: '#BEBEBE'
	}
})
