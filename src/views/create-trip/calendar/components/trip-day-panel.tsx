import { ScrollView, StyleSheet } from 'react-native'
import { AddPlaceButton } from './add-place-button'
import { TripDay } from '../../../../types/trip'
import { PlaceWidget } from './place-widget'

export type TripDayProps = {
	id: string
	day: TripDay & { number: number }
	editable?: boolean
}

export const TripDayPanel = ({ id, day, editable }: TripDayProps) => {
	return (
		<ScrollView style={styles.container}>
			{day.places.map(place => (
				<PlaceWidget key={Math.random()} place={place} />
			))}
			{editable && <AddPlaceButton id={id} day={day.number} />}
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
