import { Image, StyleSheet, View } from 'react-native'
import { Title } from '../../../../components/title'
import { PlaceInfo } from '../../../../types/api'
import { getImage } from '../../../../apis/google'
import { Comment } from '../../../../components/comment'

export type PlaceWidgetProps = {
	place: PlaceInfo
}

export const PlaceWidget = ({ place }: PlaceWidgetProps) => {
	return (
		<View style={styles.container}>
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
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		marginHorizontal: 25,
		marginVertical: 10,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-start',
		flexDirection: 'row',
		gap: 20
	},
	image: {
		borderRadius: 10,
		width: 50,
		height: 50
	}
})
