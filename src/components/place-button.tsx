import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import { PlaceInfo } from '../types/api'
import { getImage } from '../apis/google'
import { Title } from './title'
import { Comment } from './comment'

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
				<Title text={place.name} />
				<Comment
					text={
						place.formatted_address.length > 30
							? place.formatted_address.substring(0, 30) + '...'
							: place.formatted_address
					}
				/>
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
