import { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { DaysTab } from '../create-trip/journal/components/days-tab'
import { TripDayPanel } from '../create-trip/journal/components/trip-day-panel'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { useTrips } from '../../contexts/trip-context'
import { Trip } from '../../types/trip'
import { Button } from '../../components/button'
import { Info } from '../../components/info'
import { Header } from '../../components/layout/header'
import { IconButton } from '../../components/icon-button'

const discover = require('../../trips.json') as Trip[]

export type DiscoverParams = RouteProp<{
	params: { id: string }
}>

export const Discover = () => {
	const trips = useTrips()
	const route = useRoute<DiscoverParams>()
	const navigation = useNavigation<any>()
	const [day, setDay] = useState(0)

	const trip = discover.find(trip => trip.id === route.params.id)!

	const onPress = async () => {
		const { id } = await trips.duplicate(trip)
		navigation.goBack()
		navigation.navigate('/trip/create/journal', { id })
	}

	if (!trip) {
		return <View />
	}

	return (
		<View>
			<Header
				left={<Info text={trip.place.name} comment="Trip to" />}
				right={<IconButton icon="close" onPress={() => navigation.goBack()} />}
			/>
			<DaysTab days={trip.days.length} onDayChange={setDay} onDayAdd={() => {}} />
			<TripDayPanel id={null as any} day={{ ...trip.days[day], index: day }} />
			<View style={styles.plan}>
				<Button text={'Plan'} onPress={onPress} />
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 25,
		paddingTop: 15,
		backgroundColor: 'white'
	},
	plan: {
		position: 'absolute',
		bottom: 180,
		width: '100%',
		padding: 25
	}
})
