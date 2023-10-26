import DateTimePicker, { DateTimePickerAndroid } from '@react-native-community/datetimepicker'
import { Platform, StyleSheet, View } from 'react-native'
import { Comment } from './comment'
import { Link } from './link'

export type DateInputProps = {
	title: string
	date?: Date
	minimum?: Date
	onDate: (date: Date) => void
}

export const DateInput = ({ title, date = new Date(), minimum = new Date(), onDate }: DateInputProps) => {
	const onPress = () => {
		DateTimePickerAndroid.open({ value: date, minimumDate: minimum, onChange: (_, date) => onDate(date!) })
	}

	if (Platform.OS === 'android') {
		return <Link text={title + ': ' + formatDate(date)} onPress={onPress} />
	}

	return (
		<View style={styles.date}>
			<Comment text={title} />
			<DateTimePicker value={date} minimumDate={minimum} onChange={(_, date) => onDate(date!)} />
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
	const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
	const month = months[date.getMonth()]
	const day = date.getDate()
	const year = date.getFullYear()
	return `${month} ${day}, ${year}`
}
