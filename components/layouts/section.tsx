import { PropsWithChildren } from 'react'
import { StyleSheet, View, ViewProps } from 'react-native'

export type SectionProps = PropsWithChildren & ViewProps

export const Section = ({ children, ...props }: SectionProps) => {
	return (
		<View style={styles.container} {...props}>
			{children}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		marginVertical: 20
	}
})
