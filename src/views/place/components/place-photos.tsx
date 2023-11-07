import { Photo } from '../../../types/api'
import { Image, ScrollView, StyleSheet, View } from 'react-native'
import { getImage } from '../../../apis/google'
import { Title } from '../../../components/title'
import { Content } from '../../../components/layout/content'

export type PlacePhotosProps = {
	photos: Photo[]
}

export const PlacePhotos = ({ photos }: PlacePhotosProps) => {
	return (
		<View>
			<Content>
				<Title text="Photos" />
			</Content>
			<ScrollView horizontal showsHorizontalScrollIndicator={false}>
				<View style={styles.photos}>
					{Array.from(photos).map(photo => (
						<Image key={Math.random()} style={styles.image} source={{ uri: getImage(photo.photo_reference) }} />
					))}
				</View>
			</ScrollView>
		</View>
	)
}

const styles = StyleSheet.create({
	photos: {
		display: 'flex',
		flexDirection: 'row',
		paddingHorizontal: 25,
		marginTop: 10,
		gap: 15
	},
	image: {
		borderRadius: 10,
		width: 200,
		height: 200
	}
})
