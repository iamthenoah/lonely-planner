import { PropsWithChildren } from 'react'
import { ImageBackground, StyleSheet, Text } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { Widget } from '../../../components/widget'
import { Trip } from '../../../types/trip'
import { getImage } from '../../../apis/google'
import { useNavigation } from '@react-navigation/native'
import { formatDate } from '../../../components/date-input'

export type TripWidgetProps = PropsWithChildren & {
	trip: Trip
}

export const TripWidget = ({ trip }: TripWidgetProps) => {
	const navigation = useNavigation<any>()

	return (
		<Widget onPress={() => navigation.navigate('/trip/journal', { id: trip.id })}>
			<ImageBackground source={{ uri: getImage(trip.place.photos ? trip.place.photos[0].photo_reference : '') }}>
				<LinearGradient style={styles.container} colors={['rgba(0,0,0,0)', 'rgba(0,0,0,.5)']}>
					<Text style={styles.location}>{trip.place.name}</Text>
					<Text style={styles.date}>{formatDate(new Date(trip.dates.start))}</Text>
				</LinearGradient>
			</ImageBackground>
		</Widget>
	)
}

const styles = StyleSheet.create({
	container: {
		width: 200,
		height: 100,
		alignItems: 'flex-start',
		justifyContent: 'flex-end',
		padding: 15
	},
	location: {
		fontSize: 20,
		fontWeight: 'bold',
		color: 'white'
	},
	date: {
		fontSize: 12,
		fontWeight: 'bold',
		color: 'white'
	}
})
