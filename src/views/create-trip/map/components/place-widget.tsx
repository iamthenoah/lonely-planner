import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StyleSheet, View } from 'react-native'
import { Title } from '../../../../components/title'
import { PlaceInfo } from '../../../../types/api'
import { Button } from '../../../../components/button'
import { Widget } from '../../../../components/widget'
import { Comment } from '../../../../components/comment'
import { getTrip, setTrip } from '../../../../storage'

export type PlaceWidgetProps = {
	id: string
	day: number
	place: PlaceInfo
}

export const PlaceWidget = ({ id, day, place }: PlaceWidgetProps) => {
	const navigation = useNavigation<any>()

	const onPress = async () => {
		const trip = await getTrip(id)
		trip?.days[day].places.push(place)
		setTrip(id, trip!)

		navigation.navigate('/trip/create/calendar', { id, day })
	}

	return (
		<SafeAreaView style={styles.container}>
			<Widget shadow style={styles.content}>
				<View style={styles.text}>
					<Title text={place.name} />
					<Comment text={place.name} />
				</View>
				<Button text="Add Location" onPress={onPress} />
			</Widget>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		position: 'absolute',
		paddingHorizontal: 20,
		width: '100%',
		bottom: 0
	},
	content: {
		padding: 20
	},
	text: {
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 20
	}
})
