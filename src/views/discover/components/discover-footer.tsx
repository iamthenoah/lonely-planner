import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { StyleSheet, View } from 'react-native'
import { Button } from '../../../components/button'
import { DateInput } from '../../../components/date-input'
import { useTrips } from '../../../contexts/trip-context'
import { Trip } from '../../../types/trip'

export type DiscoverFooterProps = {
	trip: Trip
}

export const DiscoverFooter = ({ trip }: DiscoverFooterProps) => {
	const navigation = useNavigation<any>()
	const [start, setStart] = useState<Date>(new Date())
	const trips = useTrips()

	const onPress = async () => {
		const { id } = await trips.duplicate(start, trip)
		navigation.goBack()
		navigation.navigate('/trip/create/journal', { id })
	}

	return (
		<View style={styles.container}>
			<DateInput title="Start date" date={start} onDate={setStart} />
			<Button text="Plan" onPress={onPress} />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		borderTopWidth: 2,
		borderColor: '#EDEEEF',
		position: 'absolute',
		bottom: 180,
		width: '100%',
		padding: 25,
		gap: 20
	}
})
