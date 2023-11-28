import { ScrollView, StyleSheet } from 'react-native'
import { AddPlaceButton } from './add-place-button'
import { RemoveDayButton } from './remove-day-button'
import { TripDay, TripPlace } from '../../../../types/trip'
import { PlaceWidget } from './place-widget'
import { Suggestion } from './suggestion'
import { useEffect, useState } from 'react'
import { getNearestPois } from '../../../../apis/google'
import { useUser } from '../../../../contexts/user-context'
import { getNextDefaultTime } from '../../map/components/place-widget'

export type TripDayProps = {
	id: string
	day: TripDay & { index: number }
	editable?: boolean
	onDayRemoved: () => void
}

export const TripDayPanel = ({ id, day, editable, onDayRemoved }: TripDayProps) => {
	const user = useUser()
	const [suggestion, setSuggestion] = useState<{ place: TripPlace; type: string } | null>(null)

	useEffect(() => {
		const previous = day.places[day.places.length - 1]

		if (previous) {
			const { lat, lng } = previous.info.geometry.location

			getNearestPois(lat, lng, user.preferences?.interests ?? []).then(data => {
				if (data) {
					const { type, info } = data
					const time = getNextDefaultTime(new Date(), day.index, previous).toString()
					setSuggestion({ place: { time, info }, type })
				}
			})
		}
	}, [day.places])

	return (
		<ScrollView style={styles.container}>
			{day.places.map((place, index) => (
				<PlaceWidget editable={editable} key={Math.random()} place={place} id={id} day={day.index} index={index} />
			))}
			{editable && (
				<>
					{suggestion && <Suggestion id={id} day={day.index} count={day.places.length} {...suggestion} />}
					<AddPlaceButton id={id} day={day.index} count={day.places.length} />
					<RemoveDayButton id={id} day={day.index} onDayRemoved={onDayRemoved} />
				</>
			)}
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: '100%',
		backgroundColor: 'white',
		overflow: 'visible'
	}
})
