import { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { TripDate } from '../../../../types/trip'
import { DateInput } from '../../../../components/date-input'

export type TripDatesProps = {
	onDate: (dates: TripDate) => void
}

export const TripDates = ({ onDate }: TripDatesProps) => {
	const [start, setStart] = useState<Date>(new Date())
	const begin = new Date()
	begin.setDate(start.getDate() + 1)
	const [end, setEnd] = useState<Date>(begin)

	useEffect(() => {
		onDate({ start, end })
	}, [])

	useEffect(() => {
		onDate({ start, end })
	}, [start, end])

	return (
		<View style={styles.container}>
			<DateInput title="Start date" date={start} onDate={setStart} />
			<DateInput title="End date" date={end} onDate={setEnd} minimum={new Date(begin)} />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center'
	}
})
