import { StyleSheet, View } from 'react-native'
import { formatAgo } from '../../../../components/date-input'
import { Subtitle } from '../../../../components/subtitle'
import { TripDate } from '../../../../types/trip'
import { TripDates } from './trip-dates'

export type DateFormProps = {
	date?: TripDate
	onDate: (dates: TripDate) => void
}

export const DateForm = ({ date, onDate }: DateFormProps) => {
	const getTimeText = () => {
		if (date) {
			const days = formatAgo(new Date(date.start), new Date(date.end))

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
