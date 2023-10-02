import { PropsWithChildren } from 'react'
import { StyleSheet, View } from 'react-native'
import { Widget } from '../../../components/elements/generics/widget'
import { useNavigation } from '@react-navigation/native'
import { Link } from '../../../components/elements/generics/link'

export type ProgressProps = {}

export type TripWidgetProps = PropsWithChildren & ProgressProps

export const TripWidget = ({ ...props }: TripWidgetProps) => {
	const navigation = useNavigation()

	return (
		<Widget onClick={console.log} style={styles.container}>
			<Link text="create" />
		</Widget>
	)
}

const styles = StyleSheet.create({
	container: {
		width: 100,
		height: 100,
		alignItems: 'center',
		justifyContent: 'center'
	}
})
