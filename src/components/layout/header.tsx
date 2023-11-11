import { PropsWithChildren, ReactNode } from 'react'
import { StyleSheet, View } from 'react-native'
import { Content } from './content'

export type HeaderProps = PropsWithChildren & {
	left?: ReactNode
	center?: ReactNode
	right?: ReactNode
	seamless?: boolean
}

export const Header = ({ left, center, right, seamless, children }: HeaderProps) => {
	return (
		<View style={{ ...styles.container, borderColor: seamless ? 'white' : '#EDEEEF' }}>
			<Content>
				<View style={styles.content}>
					{left && <View>{left}</View>}
					{center && <View style={styles.center}>{center}</View>}
					{right && <View>{right}</View>}
				</View>
				{children && <View style={styles.children}>{children}</View>}
			</Content>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		borderBottomWidth: 2,
		backgroundColor: 'white'
	},
	content: {
		alignItems: 'center',
		flexDirection: 'row',
		width: '100%',
		marginVertical: 15,
		justifyContent: 'space-between'
	},
	center: {
		alignItems: 'center'
	},
	children: {
		marginBottom: 15
	}
})
