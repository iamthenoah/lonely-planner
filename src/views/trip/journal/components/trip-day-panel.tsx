import { ScrollView, StyleSheet } from 'react-native'
import { AddPlaceButton } from './add-place-button'
import { RemoveDayButton } from './remove-day-button'
import { TripDay } from '../../../../types/trip'
import { PlaceWidget } from './place-widget'

export type TripDayProps = {
	id: string
	day: TripDay & { index: number }
	editable?: boolean
	onDayRemoved: () => void
}

export const TripDayPanel = ({ id, day, editable, onDayRemoved }: TripDayProps) => {
	return (
		<ScrollView style={styles.container}>
			{day.places.map((place, index) => (
				<PlaceWidget editable={editable} key={Math.random()} place={place} id={id} day={day.index} index={index} />
			))}
			{editable && <AddPlaceButton id={id} day={day.index} count={day.places.length} />}
			{editable && <RemoveDayButton id={id} day={day.index} onDayRemoved={onDayRemoved} />}
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: '100%',
		backgroundColor: 'white'
	}
})
