import { PropsWithChildren } from 'react'
import { StyleSheet, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Widget } from '../../../components/widget'
import { Title } from '../../../components/title'
import MapView from 'react-native-maps'

export type ProgressProps = {
	title: string
}

export type MapWidgetProps = PropsWithChildren & ProgressProps

export const MapWidget = ({ ...props }: MapWidgetProps) => {
	const navigation = useNavigation()

	return (
		<Widget footer={<Footer {...props} />} shadow onClick={() => navigation.navigate('Map')}>
			<MapView style={styles.map} showsUserLocation />
		</Widget>
	)
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
	},
	map: {
		width: '100%',
		height: 200
	}
})
