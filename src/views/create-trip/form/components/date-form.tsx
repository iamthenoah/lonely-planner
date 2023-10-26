import { StyleSheet, View } from 'react-native'
import { Subtitle } from '../../../../components/subtitle'
import { TripDate } from '../../../../types/trip'
import { TripDates } from './trip-dates'
import format from 'humanize-duration'

export type DateFormProps = {
	date?: TripDate
	onDate: (dates: TripDate) => void
}

export const DateForm = ({ date, onDate }: DateFormProps) => {
	const getTimeText = () => {
		if (date) {
			const days = format(date.end.getTime() - date.start.getTime(), { units: ['d'], round: true })

			if (days != '0 days') {
				return 'Duration: ' + days
			}
		}
		return 'Select dates'
	}

	return (
		<View style={styles.container}>
			<TripDates onDate={onDate} />
			<Subtitle text={getTimeText()} />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		gap: 50,
		alignItems: 'center'
	}
})
