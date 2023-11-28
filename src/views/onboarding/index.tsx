import { useState } from 'react'
import { FlatList, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { PoiInterest, Pois } from '../../types/poi'
import { IconButton } from '../../components/icon-button'
import { Container } from '../../components/layout/container'
import { Header } from '../../components/layout/header'
import { Interest } from './components/interest'

export const Onboarding = () => {
	const [intrests, setIntrests] = useState<PoiInterest[]>([])
	const navigation = useNavigation<any>()

	const onPress = (poi: PoiInterest, select: boolean) => {
		if (select) {
			setIntrests([poi, ...intrests])
		} else {
			setIntrests(intrests.filter(intrest => intrest === poi))
		}
	}

	return (
		<Container>
			<Header seamless right={<IconButton icon="close" onPress={() => navigation.navigate('/home')} />} />
			<FlatList
				style={{ overflow: 'visible' }}
				data={Object.entries(Pois)}
				numColumns={2}
				keyExtractor={() => Math.random().toString()}
				renderItem={({ item: [poi] }) => (
					<Interest
						title={poi as any}
						icon={''}
						onSelected={() => onPress(poi as any as PoiInterest, true)}
						onDeselected={() => onPress(poi as any as PoiInterest, false)}
					/>
				)}
			/>
		</Container>
	)
}

const styles = StyleSheet.create({
	container: {}
})
