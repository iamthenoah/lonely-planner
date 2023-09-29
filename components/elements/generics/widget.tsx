import { PropsWithChildren, ReactNode } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { Shadow } from './shadow'

export type WidgetProps = PropsWithChildren & {
	footer?: ReactNode
	shadow?: boolean
	onClick?: () => void
}

export const Widget = ({ children, footer, shadow, onClick }: WidgetProps) => {
	let content = (
		<View style={styles.container}>
			{children}
			{footer && <View style={styles.footer}>{footer}</View>}
		</View>
	)

	if (shadow) {
		content = <Shadow>{content}</Shadow>
	}
	if (onClick) {
		content = <TouchableOpacity onPress={onClick}>{content}</TouchableOpacity>
	}
	return content
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
