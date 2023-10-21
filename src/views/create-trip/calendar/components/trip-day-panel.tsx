import { ScrollView, StyleSheet } from 'react-native'
import { AddPoiButton } from './add-poi-button'
import { TripDay } from '../../../../types/trip'
import { PoiWidget } from './poi-widget'

export type TripDayProps = {
	id: string
	day: TripDay & { number: number }
	editable?: boolean
}

export const TripDayPanel = ({ id, day, editable }: TripDayProps) => {
	return (
		<ScrollView style={styles.container}>
			{day.pois.map(poi => (
				<PoiWidget key={Math.random()} poi={poi} />
			))}
			{editable && <AddPoiButton id={id} day={day.number} />}
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
