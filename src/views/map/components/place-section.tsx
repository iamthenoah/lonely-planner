import { Dimensions, ScrollView, StyleSheet, View } from 'react-native'
import { TripPlace } from '../../../types/trip'
import { PlaceWidget } from './place-widget'

export type PlaceSectionProps = {
	places: TripPlace[]
}

export const PlaceSection = ({ places }: PlaceSectionProps) => {
	return (
		<ScrollView
			horizontal
			showsHorizontalScrollIndicator={false}
			style={styles.container}
			decelerationRate={0}
			snapToInterval={Dimensions.get('screen').width}
			snapToAlignment={'center'}
		>
			<View style={styles.content}>
				{places.map(place => (
					<PlaceWidget key={Math.random()} place={place} />
				))}
			</View>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	container: {
		position: 'absolute',
		paddingBottom: 20,
		bottom: 40
	},
	content: {
		display: 'flex',
		flexDirection: 'row'
	}
})
