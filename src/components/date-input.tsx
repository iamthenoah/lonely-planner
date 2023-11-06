import DateTimePicker, { DateTimePickerAndroid } from '@react-native-community/datetimepicker'
import { Platform, StyleSheet, View } from 'react-native'
import { Comment } from './comment'
import { Link } from './link'

export type DateInputProps = {
	title?: string
	date?: Date
	minimum?: Date
	hours?: boolean
	onDate: (date: Date) => void
}

export const DateInput = ({ title, hours, date = new Date(), minimum = new Date(), onDate }: DateInputProps) => {
	const mode = hours ? 'time' : 'date'

	const onPress = () => {
		DateTimePickerAndroid.open({ mode, value: date, minimumDate: minimum, onChange: (_, date) => onDate(date!) })
	}

	if (Platform.OS === 'android') {
		return <Link text={title + ': ' + formatDate(date)} onPress={onPress} />
	}

	return (
		<View style={styles.date}>
			{title && <Comment text={title} />}
			<DateTimePicker mode={mode} value={date} minimumDate={minimum} onChange={(_, date) => onDate(date!)} />
		</View>
	)
}

const styles = StyleSheet.create({
	date: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		gap: 10,
		marginRight: 10 // TODO - review
	}
})

export const formatDate = (date: Date) => {
	return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
}
