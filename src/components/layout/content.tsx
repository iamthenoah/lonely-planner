import { PropsWithChildren } from 'react'
import { StyleSheet, View } from 'react-native'

export const Content = ({ children }: PropsWithChildren) => {
	return <View style={styles.container}>{children}</View>
}

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 25
	}
})
