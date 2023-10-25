import React, { useState } from 'react'
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
import { DateInput } from '../../components/date-input'
import { SafeAreaView } from 'react-native-safe-area-context'

const discover = require('../../assets/trips.json') as Trip[]

export type DiscoverParams = RouteProp<{
	params: { id: string }
}>

export const Discover = () => {
	const trips = useTrips()
	const route = useRoute<DiscoverParams>()
	const navigation = useNavigation<any>()
	const [day, setDay] = useState(0)
	const [start, setStart] = useState<Date>(new Date())

	const trip = discover.find(trip => trip.id === route.params.id)!

	const onPress = async () => {
		const { id } = await trips.duplicate(start, trip)
		navigation.goBack()
		navigation.navigate('/trip/create/journal', { id })
	}

	if (!trip) {
		return <View />
	}

	return (
		<SafeAreaView>
			<Header
				left={<Info text={trip.place.name} comment="Trip to" />}
				right={<IconButton icon="close" onPress={() => navigation.goBack()} />}
			/>
			<DaysTab days={trip.days.length} onDayChange={setDay} onDayAdded={() => {}} />
			<TripDayPanel id={null as any} day={{ ...trip.days[day], index: day }} onDayRemoved={() => {}} />
			<View style={styles.plan}>
				<DateInput title="Start date" date={start} onDate={setStart} />
				<Button text="Plan" onPress={onPress} />
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 25,
		paddingTop: 15,
		backgroundColor: 'white'
	},
	plan: {
		borderTopWidth: 2,
		borderColor: '#EDEEEF',
		position: 'absolute',
		bottom: 180,
		width: '100%',
		padding: 25,
		gap: 20
	}
})
