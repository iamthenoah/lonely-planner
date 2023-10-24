import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'
import { useTrips } from '../../../../contexts/trip-context'

export type RemoveDayButtonProps = {
	id: string
	day: number
}

export const RemoveDayButton = ({ id, day }: RemoveDayButtonProps) => {
	const navigation = useNavigation<any>()
	const trips = useTrips()

	const onPress = () => {
		trips.update(id, async trip => {
			trip.days.splice(day, 1)
			return trip
		})

		const trip = trips.get(id)

		if (trip && trip.days.length === 0) {
			trips.remove(id).then(() => navigation.navigate('/home'))
		} else {
			navigation.navigate('/trip/create/journal', { id })
		}
	}

	return (
		<TouchableOpacity style={styles.container} onPress={onPress}>
			<Ionicons size={20} color="red" name="close" />
			<Text style={styles.text}>Remove Day</Text>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flexDirection: 'row',
		marginHorizontal: 20,
		marginVertical: 10,
		gap: 20
	},
	text: {
		fontSize: 16,
		fontWeight: 'bold',
		color: 'red'
	}
})
