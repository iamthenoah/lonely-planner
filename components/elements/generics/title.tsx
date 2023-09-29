import { StyleSheet, Text } from 'react-native'

export type TitleProps = {
	text: string
}

export const Title = ({ text }: TitleProps) => {
	return <Text style={styles.container}>{text}</Text>
}

const styles = StyleSheet.create({
	container: {
		fontSize: 22,
		fontWeight: 'bold',
		color: '#6A6A6A'
	}
})
