import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import { PlaceInfo } from '../types/api'
import { getImage } from '../apis/google'
import { Title } from './title'
import { Comment } from './comment'

const truncate = (text: string, size: number) => {
	return text.length > size ? text.substring(0, size) + '...' : text
}

export type PlaceButtonProps = {
	place: PlaceInfo
}

export const PlaceButton = ({ place }: PlaceButtonProps) => {
	const onPress = () => {
		console.log(place.place_id)
	}

	return (
		<TouchableOpacity onPress={onPress} style={styles.container}>
			{place.photos && <Image style={styles.image} source={{ uri: getImage(place.photos[0].photo_reference) }} />}
			<View>
				<Title text={truncate(place.name, 17)} />
				<Comment text={truncate(place.formatted_address, 30)} />
			</View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'row',
		gap: 20
	},
	image: {
		borderRadius: 10,
		width: 50,
		height: 50
	}
})
