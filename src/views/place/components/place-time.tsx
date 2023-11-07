import { Platform, StyleSheet, View } from 'react-native'
import { DateInput, formatDate } from '../../../components/date-input'
import { Title } from '../../../components/title'
import { Content } from '../../../components/layout/content'
import { Subtitle } from '../../../components/subtitle'
import { Widget } from '../../../components/widget'
import { useTrips } from '../../../contexts/trip-context'
import { useState } from 'react'

export type PlaceTimeProps = {
	index: number
	day: number
	id: string
	time: string
}

export const PlaceTime = ({ index, id, day, time }: PlaceTimeProps) => {
	const trips = useTrips()
	const [trip] = useState(trips.get(id)!)
	const [date] = useState(new Date(time))

	const onDate = (date: Date) => {
		if (date.getTime() !== new Date(time).getTime()) {
			trips.update(id, trip => {
				trip.days[day].places = trip.days[day].places.map((p, i) => (i === index ? { ...p, time: date.toString() } : p))
			})
		}
	}

	return (
		<Content>
			<View style={styles.container}>
				<Title text="Time" />
				<Widget style={styles.content}>
					<Subtitle text={formatDate(date)} />
					<Subtitle text="at" />
					<DateInput
						hours
						date={date}
						minimum={trip.days[day].places[index - 1] ? new Date(trip.days[day].places[index - 1]?.time) : undefined}
						onDate={onDate}
						title={Platform.OS !== 'ios' ? 'Select time' : undefined}
					/>
				</Widget>
			</View>
		</Content>
	)
}

const styles = StyleSheet.create({
	container: {
		marginTop: 15
	},
	content: {
		padding: 10,
		marginTop: 10,
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around'
	}
})
