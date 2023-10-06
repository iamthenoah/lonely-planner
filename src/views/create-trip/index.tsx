import { useState } from 'react'
import { Button } from '../../components/button'
import { LocationForm } from './components/location-form'
import { DateForm, Dates } from './components/date-form'
import { ReviewForm } from './components/review-form'
import { StyleSheet, View } from 'react-native'
import { Title } from '../../components/title'
import { Link } from '../../components/link'
import { Result } from '../../types/poi'
import { useNavigation } from '@react-navigation/native'

const buttons = [
	['Next', 'cancel'],
	['Next', 'previous step'],
	['Create', 'previous step']
]

const titles = ['Where would you like to go?', 'When and for how long?', 'Review trip information']

export const CreateTrip = () => {
	const navigation = useNavigation()
	const [form, setForm] = useState(0)
	const [location, setLocation] = useState<Result | undefined>()
	const [dates, setDates] = useState<Dates | null>(null)

	const nextForm = () => {
		setForm(Math.max(0, Math.min(form + 1, 2)))

		if (form == 2) {
			navigation.goBack()
		}
	}

	const previousForm = () => {
		setForm(Math.max(0, Math.min(form - 1, 2)))

		if (form == 0) {
			navigation.navigate('/home' as never)
		}
	}

	return (
		<View style={styles.container}>
			<View style={styles.title}>
				<Title text={titles[form]} />
			</View>
			<View style={styles.form}>
				{form === 0 && <LocationForm poi={location} onLocation={setLocation} />}
				{form === 1 && <DateForm onDate={setDates} />}
				{form === 2 && <ReviewForm location={location!} dates={dates!} />}
			</View>
			<View style={styles.actions}>
				<Button
					shadow
					text={buttons[form][0]}
					onPress={nextForm}
					disabled={form === 0 ? !location : form === 1 ? !dates : true}
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
		// backgroundColor: 'red',
		flex: 1,
		alignItems: 'center',
		justifyContent: 'flex-end'
	},
	form: {
		// backgroundColor: 'green',
		flex: 2,
		alignItems: 'center',
		justifyContent: 'center',
		width: 390
	},
	actions: {
		// backgroundColor: 'blue',
		flex: 1,
		justifyContent: 'flex-start',
		paddingHorizontal: 25,
		gap: 20
	}
})
