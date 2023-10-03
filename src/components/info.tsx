import { StyleSheet, View } from 'react-native'
import { Title } from './title'
import { Comment } from './comment'

export type InfoProps = {
	text: string
	comment: string
}

export const Info = ({ text, comment }: InfoProps) => {
	return (
		<View style={styles.container}>
			<Comment text={comment} />
			<Title text={text} />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		marginVertical: 10
	}
})
