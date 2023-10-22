import { PropsWithChildren } from 'react'
import { ImageBackground, StyleSheet, Text } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { Widget } from '../../../components/widget'
import { Trip } from '../../../types/trip'
import { getImage } from '../../../apis/google'
import { useNavigation } from '@react-navigation/native'

export type TripWidgetProps = PropsWithChildren & {
	trip: Trip
}

export const TripWidget = ({ trip }: TripWidgetProps) => {
	const navigation = useNavigation<any>()

	return (
		<Widget onPress={() => navigation.navigate('/trip/create/calendar', { id: trip.id })} style={{ marginLeft: 10 }}>
			<ImageBackground source={{ uri: getImage(trip.place.photos[0].photo_reference) }}>
				<LinearGradient style={styles.container} colors={['rgba(0,0,0,0)', 'rgba(0,0,0,.5)']}>
					<Text style={styles.location}>{trip.place.name}</Text>
					<Text style={styles.date}>{trip.dates.start.toString()}</Text>
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
