import { Image, StyleSheet, View } from 'react-native'
import { Widget } from '../../../components/widget'
import { Title } from '../../../components/title'
import { Link } from '../../../components/link'
import { Trip } from '../../../types/trip'
import { getImage } from '../../../apis/google'
import { PlaceInfo } from '../../../types/api'
import { useNavigation } from '@react-navigation/native'

export type DiscoverWidgetProps = {
	trip: Trip
}

export const DiscoverWidget = ({ trip }: DiscoverWidgetProps) => {
	const navigation = useNavigation<any>()

	const onPress = () => {
		navigation.navigate('/trip/discover', { id: trip.id })
	}

	return (
		<View style={styles.container}>
			<Widget onPress={onPress} footer={<Footer place={trip.place} />}>
				{trip.place.photos && (
					<Image style={styles.image} source={{ uri: getImage(trip.place.photos[0].photo_reference) }} />
				)}
			</Widget>
		</View>
	)
}

const Footer = ({ place }: { place: PlaceInfo }) => {
	return (
		<View style={styles.footer}>
			<Title text={place.name} />
			<View>
				<Link text={place.formatted_address} />
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		paddingBottom: 15
	},
	image: {
		width: '100%',
		height: 150
	},
	footer: {
		paddingHorizontal: 15,
		paddingVertical: 10,
		alignItems: 'flex-start'
	}
})
