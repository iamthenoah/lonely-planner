import { StyleSheet, View } from 'react-native'
import { Title } from './title'
import { Comment } from './comment'

export type InfoProps = {
	text: string
	comment: string
	flipped?: boolean
}

export const Info = ({ text, comment, flipped }: InfoProps) => {
	return (
		<View style={styles.container}>
			{flipped ? (
				<>
					<Title text={text} />
					<Comment text={comment} />
				</>
			) : (
				<>
					<Comment text={comment} />
					<Title text={text} />
				</>
			)}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		marginVertical: 10
	}
})
