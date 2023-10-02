import { PropsWithChildren, ReactNode } from 'react'
import { StyleSheet, View, ViewProps } from 'react-native'
import { Title } from '../title'

export type SectionProps = PropsWithChildren &
	ViewProps & {
		name: string
		action?: ReactNode
	}

export const Section = ({ name, action, children, ...props }: SectionProps) => {
	return (
		<View style={styles.container} {...props}>
			<View style={styles.header}>
				<Title text={name} />
				{action}
			</View>
			{children}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		marginBottom: 25
	},
	header: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: 'row',
		marginVertical: 10
	}
})
