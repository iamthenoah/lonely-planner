import { Dimensions, NativeScrollEvent, NativeSyntheticEvent, ScrollView, StyleSheet, View } from 'react-native'
import { TripPlace } from '../../../types/trip'
import { PlaceWidget } from './place-widget'
import { useRef } from 'react'

export type PlaceSectionProps = {
	index?: number
	places: TripPlace[]
	onPlaceChange: (place: TripPlace) => void
}

export const PlaceSection = ({ index = 0, places, onPlaceChange }: PlaceSectionProps) => {
	const { width } = Dimensions.get('screen')
	const scroller = useRef<ScrollView>(null)

	const setPlace = (index: number) => {
		scroller.current?.scrollTo({ x: index * width })
		places[index] && onPlaceChange(places[index])
	}

	const onScrollStopped = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
		const index = Math.floor(event.nativeEvent.contentOffset.x / width)
		places[index] && onPlaceChange(places[index])
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
			onLayout={() => setPlace(index)}
			ref={scroller}
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
