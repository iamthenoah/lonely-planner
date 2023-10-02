import { PropsWithChildren } from 'react'
import { StyleSheet } from 'react-native'
import { Widget } from '../../../components/widget'
import { Link } from '../../../components/link'

export type TripWidgetFooterProps = {}

export type TripWidgetProps = PropsWithChildren & TripWidgetFooterProps

export const TripWidget = ({}: TripWidgetProps) => {
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
