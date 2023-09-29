import { StyleSheet, View } from 'react-native'
import { Widget } from './generics/widget'
import { Title } from './generics/title'
import { PropsWithChildren } from 'react'

export type ProgressProps = {
	title: string
}

export type MapWidgetProps = PropsWithChildren & ProgressProps

export const MapWidget = ({ ...props }: MapWidgetProps) => {
	return <Widget footer={<Footer {...props} />} shadow></Widget>
}

const Footer = ({ title }: ProgressProps) => {
	return (
		<View style={styles.footer}>
			<Title text={title} />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		fontSize: 18,
		fontWeight: 'bold',
		color: '#6A6A6A',
		marginVertical: 10
	},
	footer: {
		padding: 15
	}
})
