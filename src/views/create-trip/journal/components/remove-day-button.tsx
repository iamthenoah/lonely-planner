import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { useTrips } from '../../../../contexts/trip-context'

export type RemoveDayButtonProps = {
	id: string
	day: number
	onDayRemoved: () => void
}

export const RemoveDayButton = ({ id, day, onDayRemoved }: RemoveDayButtonProps) => {
	const trips = useTrips()

	const onPress = () => {
		trips
			.update(id, trip => {
				trip.days.splice(day, 1)
				return trip
			})
			.then(onDayRemoved)
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
