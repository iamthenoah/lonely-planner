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
					<View style={styles.left}>{left && left}</View>
					<View style={styles.center}>{center && center}</View>
					<View style={styles.right}>{right && right}</View>
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
		marginVertical: 15
	},
	left: {
		flex: 1
	},
	center: {
		alignItems: 'center'
	},
	right: {
		flex: 1,
		alignItems: 'flex-end'
	},
	children: {
		marginBottom: 15
	}
})
