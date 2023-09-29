import { PropsWithChildren, ReactNode } from 'react'
import { StyleSheet, View } from 'react-native'
import { Shadow } from './shadow'

export type WidgetProps = PropsWithChildren & {
	footer?: ReactNode
	shadow?: boolean
}

export const Widget = ({ children, footer, shadow }: WidgetProps) => {
	const content = (
		<View style={styles.container}>
			{children}
			{footer && <View style={styles.footer}>{footer}</View>}
		</View>
	)

	return shadow ? <Shadow>{content}</Shadow> : content
}

const styles = StyleSheet.create({
	container: {
		overflow: 'hidden',
		borderRadius: 20,
		borderColor: '#EDEEEF',
		borderWidth: 2,
		backgroundColor: 'white',
		display: 'flex',
		flexDirection: 'column'
	},
	footer: {
		borderColor: '#EDEEEF',
		borderTopWidth: 2
	}
})
