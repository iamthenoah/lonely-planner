import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { Content } from '../../../../components/layout/content'
import { TripPlace } from '../../../../types/trip'
import { formatHours } from '../../../../components/date-input'
import { Paragraph } from '../../../../components/paragraph'
import { Subtitle } from '../../../../components/subtitle'
import { Title } from '../../../../components/title'
import { useNavigation } from '@react-navigation/native'
import { useTrips } from '../../../../contexts/trip-context'
import { getNextDefaultTime } from '../../map/components/place-widget'

export type SuggestionProps = {
	id: string
	day: number
	count: number
	place: TripPlace
	type: string
}

export const Suggestion = ({ id, day, count, place, type }: SuggestionProps) => {
	const navigation = useNavigation<any>()
	const trips = useTrips()

	const onPress = () => {
		trips
			.update(id, trip => trip.days[day].places.push(place))
			.then(() => navigation.navigate('/trip/map', { id, day, count }))
	}

	return (
		<Content>
			<TouchableOpacity onPress={onPress}>
				<View style={styles.container}>
					<View style={styles.header}>
						<Subtitle text="Suggestion" />
						<Paragraph text={formatHours(new Date(place.time))} />
					</View>
					<View style={styles.content}>
						<Title text={place.info.name} />
						<Subtitle text={type} />
					</View>
				</View>
			</TouchableOpacity>
		</Content>
	)
}

const styles = StyleSheet.create({
	container: {
		borderRadius: 20,
		backgroundColor: '#e2edff',
		padding: 20
	},
	header: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	content: {
		marginTop: 10
	}
})
