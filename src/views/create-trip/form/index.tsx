import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Button } from '../../../components/button'
import { PlaceForm } from './components/place-form'
import { DateForm } from './components/date-form'
import { ReviewForm } from './components/review-form'
import { StyleSheet, View } from 'react-native'
import { Title } from '../../../components/title'
import { Link } from '../../../components/link'
import { Subtitle } from '../../../components/subtitle'
import { TripDate } from '../../../types/trip'
import { PlaceInfo } from '../../../types/api'
import { useTrips } from '../../../contexts/trip-context'

const buttons = [
	['Next', 'cancel'],
	['Next', 'back'],
	['Create', 'back']
]

const titles = ['Where would you like to go?', 'When and for how long?', 'Review trip information']

export const CreateTripForm = () => {
	const trips = useTrips()
	const navigation = useNavigation<any>()
	const [form, setForm] = useState(0)
	const [place, setPlace] = useState<PlaceInfo | null>()
	const [dates, setDates] = useState<TripDate | null>(null)

	const nextForm = () => {
		setForm(Math.max(0, Math.min(form + 1, 2)))

		if (form == 2 && dates && place) {
			trips.create(place, dates).then(({ id }) => navigation.navigate('/trip/create/calendar', { id }))
		}
	}

	const previousForm = () => {
		setForm(Math.max(0, Math.min(form - 1, 2)))

		if (form == 0) {
			navigation.navigate('/home')
		}
	}

	return (
		<View style={styles.container}>
			<View style={styles.title}>
				<Title text={titles[form]} />
				<Subtitle text={'step ' + (form + 1) + ' of 3'} />
			</View>
			<View style={styles.form}>
				{form === 0 && <PlaceForm place={place} onPlace={setPlace} />}
				{form === 1 && <DateForm start={dates?.start} end={dates?.end} onDate={setDates} />}
				{form === 2 && <ReviewForm place={place!} dates={dates!} />}
			</View>
			<View style={styles.actions}>
				<Button
					shadow
					text={buttons[form][0]}
					onPress={nextForm}
					disabled={form === 0 ? !place : form === 1 ? !dates : false}
				/>
				<Link text={buttons[form][1]} onPress={previousForm} />
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
		display: 'flex'
	},
	title: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'flex-end',
		gap: 25
	},
	form: {
		flex: 2,
		alignItems: 'center',
		justifyContent: 'center'
	},
	actions: {
		flex: 1,
		justifyContent: 'flex-start',
		paddingHorizontal: 25,
		gap: 15
	}
})
