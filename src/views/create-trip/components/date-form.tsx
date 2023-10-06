import { View } from 'react-native'

export type Dates = {
	start: Date
	end: Date
}

export type DateFormProps = {
	onDate: (dates: Dates) => void
}

export const DateForm = ({ onDate }: DateFormProps) => {
	return <View></View>
}
