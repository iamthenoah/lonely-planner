import { StyleSheet, View } from 'react-native'
import { Info } from '../../../../components/info'
import { Widget } from '../../../../components/widget'
import { TripDate } from '../../../../types/trip'
import { PlaceInfo } from '../../../../types/api'
import { formatAgo, formatDate } from '../../../../components/date-input'

export type ReviewFormProps = {
	place: PlaceInfo
	dates: TripDate
}

export const ReviewForm = ({ place, dates }: ReviewFormProps) => {
	return (
		<View style={styles.container}>
			<Widget style={styles.content}>
				<Info comment="Location" text={place.name} />
				<Info comment="Start date" text={formatDate(new Date(dates.start))} />
				<Info comment="End date" text={formatDate(new Date(dates.end))} />
				<Info comment="Duration" text={formatAgo(new Date(dates.start), new Date(dates.end))} />
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
