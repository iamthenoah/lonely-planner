import { ReactNode } from 'react'
import { StyleSheet, View } from 'react-native'

export type HeaderProps = {
	left?: ReactNode
	center?: ReactNode
	right?: ReactNode
}

export const Header = ({ left, center, right }: HeaderProps) => {
	return (
		<View style={styles.container}>
			<View style={styles.left}>{left && left}</View>
			<View style={styles.center}>{center && center}</View>
			<View style={styles.right}>{right && right}</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: 'row'
	},
	left: {
		flex: 1
	},
	center: {
		flex: 1,
		alignItems: 'center'
	},
	right: {
		flex: 1,
		alignItems: 'flex-end'
	}
})
