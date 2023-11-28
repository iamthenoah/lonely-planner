import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export type InterestProps = {
	title: string
	icon: string
	selected: boolean
	onPress: () => void
}

export const Interest = ({ title, icon, selected, onPress }: InterestProps) => {
	return (
		<View style={styles.container}>
			<TouchableOpacity
				onPress={onPress}
				style={{ ...styles.content, borderColor: selected ? '#0057D9' : '#EDEEEF', borderWidth: selected ? 4 : 2 }}
			>
				<Text style={styles.title}>{title}</Text>
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		padding: 10,
		flexBasis: '50%'
	},
	content: {
		aspectRatio: 1,
		borderRadius: 20,
		alignItems: 'center',
		justifyContent: 'center'
	},
	title: {
		textTransform: 'capitalize',
		fontSize: 18,
		fontWeight: 'bold',
		color: '#6A6A6A'
	}
})
