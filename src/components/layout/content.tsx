import { PropsWithChildren } from 'react'
import { SafeAreaView, ScrollView, StyleSheet, View, ViewProps } from 'react-native'

export type ContentProps = PropsWithChildren & ViewProps

export const Content = ({ children, ...props }: ContentProps) => {
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView>
				<View style={styles.content} {...props}>
					{children}
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'white'
	},
	content: {
		width: '100%',
		paddingHorizontal: 25
	}
})
