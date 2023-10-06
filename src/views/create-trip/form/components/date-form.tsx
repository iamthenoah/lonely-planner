import { useEffect, useState } from 'react'
import DateTimePicker, { DateTimePickerAndroid } from '@react-native-community/datetimepicker'
import { Platform, StyleSheet, View } from 'react-native'
import { Button } from '../../../../components/button'
import { Comment } from '../../../../components/comment'
import format from 'humanize-duration'
import { Subtitle } from '../../../../components/subtitle'

export type Dates = {
	start: Date
	end: Date
}

export type DateFormProps = {
	start?: Date
	end?: Date
	onDate: (dates: Dates | null) => void
}

export const DateForm = ({ start: startInit = new Date(), end: endInit = new Date(), onDate }: DateFormProps) => {
	const [start, setStart] = useState<Date | undefined>(startInit)
	const [end, setEnd] = useState<Date | undefined>(endInit)

	useEffect(() => {
		onDate(
			start && end && start.getTime() < end.getTime() && start.getDay() >= new Date().getDay() ? { start, end } : null
		)
	}, [start, end])

	const getTimeText = () => {
		if (start && end) {
			return 'Duration: ' + format(end.getTime() - start.getTime(), { units: ['y', 'mo', 'w', 'd', 'h'], round: true })
		}
		return 'Select dates'
	}

	return (
		<View style={styles.container}>
			<View style={styles.dates}>
				<DateInput title="Start date" date={start} onDate={setStart} />
				<DateInput title="End date" date={end} onDate={setEnd} />
			</View>
			<Subtitle text={getTimeText()} />
		</View>
	)
}

type DateInputProps = {
	title: string
	date?: Date
	onDate: (date?: Date) => void
}

const DateInput = ({ title, date = new Date(), onDate }: DateInputProps) => {
	if (Platform.OS === 'android') {
		return <Button text={title} onPress={() => DateTimePickerAndroid.open({ value: date })} />
	}
	return (
		<View style={styles.date}>
			<Comment text={title} />
			<DateTimePicker value={date} onChange={(_, date) => onDate(date)} />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		alignItems: 'center',
		gap: 50
	},
	dates: {
		width: '100%',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-around'
	},
	date: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		gap: 10
	}
})
