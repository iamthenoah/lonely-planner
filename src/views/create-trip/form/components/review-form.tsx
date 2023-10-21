import { StyleSheet, View } from 'react-native'
import { Result } from '../../../../types/poi'
import { Info } from '../../../../components/info'
import { Widget } from '../../../../components/widget'
import { TripDates } from '../../../../types/trip'
import format from 'humanize-duration'

export type ReviewFormProps = {
	location: Result
	dates: TripDates
}

export const ReviewForm = ({ location, dates }: ReviewFormProps) => {
	return (
		<View style={styles.container}>
			<Widget style={styles.content}>
				<Info comment="Location" text={location.poi.name} />
				<Info comment="Start date" text={dates.start.toDateString()} />
				<Info comment="End date" text={dates.end.toDateString()} />
				<Info
					comment="Duration"
					text={format(dates.end.getTime() - dates.start.getTime(), { units: ['d'], round: true })}
				/>
			</Widget>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		width: '100%',
		paddingHorizontal: 25
	},
	content: {
		padding: 25
	},
	info: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between'
	}
})
