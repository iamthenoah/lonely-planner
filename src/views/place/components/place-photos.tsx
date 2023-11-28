import { Image, ScrollView, StyleSheet, View } from 'react-native'
import { Title } from '../../../components/title'
import { Content } from '../../../components/layout/content'

export type PlacePhotosProps = {
	photos: string[]
}

export const PlacePhotos = ({ photos }: PlacePhotosProps) => {
	return (
		<View>
			<Content>
				<Title text="Photos" />
			</Content>
			<ScrollView horizontal showsHorizontalScrollIndicator={false}>
				<View style={styles.photos}>
					{photos.map(uri => (
						<Image key={Math.random()} style={styles.image} source={{ uri }} />
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
