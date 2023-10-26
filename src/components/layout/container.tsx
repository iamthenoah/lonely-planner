import { PropsWithChildren } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StyleSheet } from 'react-native'

export const Container = ({ children }: PropsWithChildren) => {
	return (
		<SafeAreaView style={styles.container} edges={['top']} mode="margin">
			{children}
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
})
