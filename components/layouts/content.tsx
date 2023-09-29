import { PropsWithChildren } from 'react'
import { SafeAreaView, ScrollView, StyleSheet, View, ViewProps } from 'react-native'

export type ContentProps = PropsWithChildren & ViewProps

export const Content = ({ children, ...props }: ContentProps) => {
	return (
		<SafeAreaView>
			<ScrollView>
				<View style={styles.container} {...props}>
					{children}
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		paddingHorizontal: 25
	}
})
