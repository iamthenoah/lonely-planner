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
import { Header } from '../../../components/layout/header'
import { IconButton } from '../../../components/icon-button'
import { Container } from '../../../components/layout/container'

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
	const [date, setDate] = useState<TripDate>()

	const nextForm = () => {
		setForm(Math.max(0, Math.min(form + 1, 2)))

		if (form == 2 && date && place) {
			trips.create(place, date).then(({ id }) => navigation.navigate('/trip/journal', { id }))
		}
	}

	const previousForm = () => {
		setForm(Math.max(0, Math.min(form - 1, 2)))

		if (form == 0) {
			navigation.navigate('/home')
		}
	}

	return (
		<Container>
			<Header seamless right={<IconButton icon="close" onPress={() => navigation.navigate('/home')} />} />
			<View style={styles.steps}>
				<Title text={titles[form]} />
				<Subtitle text={'step ' + (form + 1) + ' of 3'} />
			</View>
			<View style={styles.form}>
				{form === 0 && <PlaceForm place={place} onPlace={setPlace} />}
				{form === 1 && <DateForm date={date} onDate={setDate} />}
				{form === 2 && <ReviewForm place={place!} dates={date!} />}
			</View>
			<View style={styles.actions}>
				<Button
					shadow
					text={buttons[form][0]}
					onPress={nextForm}
					disabled={form === 0 ? !place : form === 1 ? !date : false}
				/>
				<Link text={buttons[form][1]} onPress={previousForm} />
			</View>
		</Container>
	)
}

const styles = StyleSheet.create({
	steps: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'flex-end',
		gap: 25
	},
	form: {
		flex: 3,
		alignItems: 'center',
		justifyContent: 'center',
		marginVertical: 25
	},
	actions: {
		flex: 1,
		paddingHorizontal: 25,
		justifyContent: 'flex-start',
		gap: 15
	}
})
