import { StyleSheet, Text } from 'react-native'

export type LinkProps = {
	text: string
}

export const Link = ({ text }: LinkProps) => {
	return <Text style={styles.container}>{text}</Text>
}

const styles = StyleSheet.create({
	container: {
		fontSize: 14,
		fontWeight: 'bold',
		color: '#0057D9'
	}
})
