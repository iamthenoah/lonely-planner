import { PropsWithChildren, ReactNode } from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native'

export type HeaderProps = PropsWithChildren & {
	left?: ReactNode
	center?: ReactNode
	right?: ReactNode
	seamless?: boolean
}

export const Header = ({ left, center, right, seamless, children }: HeaderProps) => {
	return (
		<SafeAreaView style={{ ...styles.container, borderColor: seamless ? 'white' : '#EDEEEF' }}>
			<View style={styles.content}>
				<View style={styles.left}>{left && left}</View>
				<View style={styles.center}>{center && center}</View>
				<View style={styles.right}>{right && right}</View>
			</View>
			{children && <View style={styles.children}>{children}</View>}
		</SafeAreaView>
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
		marginVertical: 15,
		paddingHorizontal: 25
	},
	left: {
		flex: 1
	},
	center: {
		flex: 2,
		alignItems: 'center'
	},
	right: {
		flex: 1,
		alignItems: 'flex-end'
	},
	children: {
		paddingHorizontal: 25,
		marginBottom: 15
	}
})
