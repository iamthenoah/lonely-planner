import { useState } from 'react'
import { RouteProp, useRoute } from '@react-navigation/native'
import { MapHeader } from './components/map-header'
import { PlaceWidget, getNextDefaultTime } from './components/place-widget'
import { PlaceInfo } from '../../../types/api'
import { Container } from '../../../components/layout/container'
import { useTrips } from '../../../contexts/trip-context'
import { Map } from '../../../components/map'

export type CreateTripMapParams = RouteProp<{
	params: { id: string; day: number; count: number }
}>

export const CreateTripMap = () => {
	const { id, day, count } = useRoute<CreateTripMapParams>().params
	const [place, setPlace] = useState<PlaceInfo | null>()
	const trips = useTrips()

	const onPlace = (place: PlaceInfo | null) => {
		setPlace(place)

		if (place) {
			// when the user presses a point on the map, the location & default time is automatically
			// added to the trip, this is so that when the `place` view is shown, updating the time
			// is possible.
			// i am sorry you have to deal with this bs...
			trips.update(id, trip => {
				const data = {
					info: place,
					time: getNextDefaultTime(new Date(trip.dates.start), day, trip.days[day].places[count - 1]).toString()
				}

				if (trip.days[day].places.length === count) {
					trip.days[day].places.push(data)
				} else {
					trip.days[day].places = trip.days[day].places.map((place, i) => (i === count ? data : place))
				}
			})
		}
	}

	return (
		<Container>
			<MapHeader onPlace={onPlace} id={id} day={day} index={count} />
			<Map onPlace={onPlace} place={place} interactive />
			{place && (
				<PlaceWidget
					id={id}
					day={day}
					index={count}
					place={place}
					time={trips.get(id)!.days[day].places[count]?.time}
				/>
			)}
		</Container>
	)
}
