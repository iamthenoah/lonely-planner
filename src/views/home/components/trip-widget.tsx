import { PropsWithChildren } from 'react'
import { ImageBackground, StyleSheet, Text } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { Widget } from '../../../components/widget'

export type TripWidgetProps = PropsWithChildren & {
	location: string
	date: string
	image: string
}

export const TripWidget = ({ location, date, image }: TripWidgetProps) => {
	return (
		<Widget onPress={console.log} style={{ marginLeft: 10 }}>
			<ImageBackground source={{ uri: image }}>
				<LinearGradient style={styles.container} colors={['rgba(0,0,0,0)', 'rgba(0,0,0,.5)']}>
					<Text style={styles.location}>{location}</Text>
					<Text style={styles.date}>{date}</Text>
				</LinearGradient>
			</ImageBackground>
		</Widget>
	)
}

const styles = StyleSheet.create({
	container: {
		width: 100,
		height: 100,
		alignItems: 'center',
		justifyContent: 'flex-end',
		padding: 10
	},
	location: {
		fontSize: 16,
		fontWeight: 'bold',
		color: 'white'
	},
	date: {
		fontSize: 10,
		fontWeight: 'bold',
		color: 'white'
	}
})
