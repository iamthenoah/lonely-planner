import { StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { PlaceInfo } from '../../../../types/api'
import { Button } from '../../../../components/button'
import { Widget } from '../../../../components/widget'
import { PlaceButton } from '../../../../components/place-button'
import { TripPlace } from '../../../../types/trip'

export const getNextDefaultTime = (start: Date, day: number, previous?: TripPlace) => {
	if (previous?.time) {
		const next = new Date(previous?.time)
		next.setSeconds(0)
		next.setMinutes(0)
		next.setHours(next.getHours() + 1)
		return next
	}
	const current = new Date()
	current.setDate(start.getDate() + day)
	current.setSeconds(0)
	current.setMinutes(0)
	current.setHours(8)
	return current
}

export type PlaceWidgetProps = {
	id: string
	day: number
	index: number
	time: string
	place: PlaceInfo
}

export const PlaceWidget = ({ id, index, day, place, time }: PlaceWidgetProps) => {
	const navigation = useNavigation<any>()

	const onPress = async () => {
		navigation.navigate('/trip/journal', { id, day })
	}

	return (
		<SafeAreaView style={styles.container}>
			<Widget shadow style={styles.content}>
				<PlaceButton place={place} info={{ id, day, index, time }} />
				<Button text="Add Location" onPress={onPress} />
			</Widget>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		position: 'absolute',
		paddingHorizontal: 20,
		width: '100%',
		bottom: 0
	},
	content: {
		padding: 20,
		gap: 15
	}
})
