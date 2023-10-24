import DateTimePicker, { DateTimePickerAndroid } from '@react-native-community/datetimepicker'
import { Platform, StyleSheet, View } from 'react-native'
import { Button } from './button'
import { Comment } from './comment'

export type DateInputProps = {
	title: string
	date?: Date
	minimum?: Date
	onDate: (date: Date) => void
}

export const DateInput = ({ title, date = new Date(), minimum = new Date(), onDate }: DateInputProps) => {
	if (Platform.OS === 'android') {
		return <Button text={title} onPress={() => DateTimePickerAndroid.open({ value: date })} />
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
