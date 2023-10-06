import { PropsWithChildren, ReactNode } from 'react'
import { StyleSheet, TouchableOpacity, View, ViewStyle } from 'react-native'
import { Shadow } from './shadow'

export type WidgetProps = PropsWithChildren & {
	footer?: ReactNode
	shadow?: boolean
	style?: ViewStyle
	onPress?: () => void
}

export const Widget = ({ children, footer, shadow, style, onPress }: WidgetProps) => {
	let content = (
		<View style={{ ...styles.container, ...style }}>
			{children}
			{footer && <View style={styles.footer}>{footer}</View>}
		</View>
	)

	if (shadow) {
		content = <Shadow>{content}</Shadow>
	}
	if (onPress) {
		content = <TouchableOpacity onPress={onPress}>{content}</TouchableOpacity>
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
