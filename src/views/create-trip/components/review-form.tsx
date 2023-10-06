import { View } from 'react-native'
import { Result } from '../../../types/poi'
import { Dates } from './date-form'
import { Info } from '../../../components/info'

export type ReviewFormProps = {
	location: Result
	dates: Dates
}

export const ReviewForm = ({ location, dates }: ReviewFormProps) => {
	return (
		<View>
			<Info text="Location" comment={location.poi.name} />
			<Info text="Duration" comment={(dates.start.getTime() - dates.end.getTime()).toString()} />
			<Info text="Start date" comment={dates.start.toDateString()} />
			<Info text="End date" comment={dates.end.toDateString()} />
		</View>
	)
}
