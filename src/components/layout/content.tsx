import { PropsWithChildren } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView, ScrollViewProps, StyleSheet } from 'react-native'

export type ContentProps = PropsWithChildren & ScrollViewProps

export const Content = ({ children, ...props }: ContentProps) => {
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView style={styles.content} {...props}>
				{children}
			</ScrollView>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		borderWidth: 2,
		borderColor: '#EDEEEF',
		backgroundColor: 'white'
	},
	content: {
		width: '100%',
		paddingHorizontal: 25
	}
})
