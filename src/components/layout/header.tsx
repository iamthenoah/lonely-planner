import { PropsWithChildren, ReactNode } from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native'

export type HeaderProps = PropsWithChildren & {
	left?: ReactNode
	center?: ReactNode
	right?: ReactNode
}

export const Header = ({ left, center, right, children }: HeaderProps) => {
	return (
		<SafeAreaView style={styles.container}>
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
		borderColor: '#EDEEEF',
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
