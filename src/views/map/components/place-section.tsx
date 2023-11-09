import { Dimensions, NativeScrollEvent, NativeSyntheticEvent, ScrollView, StyleSheet, View } from 'react-native'
import { TripPlace } from '../../../types/trip'
import { PlaceWidget } from './place-widget'

export type PlaceSectionProps = {
	places: TripPlace[]
	onPlaceChange: (place: TripPlace) => void
}

export const PlaceSection = ({ places, onPlaceChange }: PlaceSectionProps) => {
	const { width } = Dimensions.get('screen')

	const onScrollStopped = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
		const index = Math.floor(event.nativeEvent.contentOffset.x / width)
		onPlaceChange(places[index])
	}

	return (
		<ScrollView
			horizontal
			showsHorizontalScrollIndicator={false}
			onMomentumScrollEnd={onScrollStopped}
			style={styles.container}
			decelerationRate={0}
			snapToInterval={width}
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
