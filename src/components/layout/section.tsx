import { PropsWithChildren } from 'react'
import { StyleSheet, View, ViewProps } from 'react-native'
import { Title } from '../title'

export type SectionProps = PropsWithChildren &
	ViewProps & {
		name: string
	}

export const Section = ({ name, children, ...props }: SectionProps) => {
	return (
		<View style={styles.container} {...props}>
			<Title text={name} />
			<View style={styles.content}>{children}</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		marginBottom: 25
	},
	content: {
		marginTop: 10
	}
})
