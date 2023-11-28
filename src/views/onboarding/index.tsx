import { useEffect, useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Pois } from '../../types/poi'
import { Container } from '../../components/layout/container'
import { Interest } from './components/interest'
import { Content } from '../../components/layout/content'
import { Button } from '../../components/button'
import { Title } from '../../components/title'
import { Header } from '../../components/layout/header'
import { useUser } from '../../contexts/user-context'

export const Onboarding = () => {
	const user = useUser()
	const navigation = useNavigation<any>()

	const [intrests, setIntrests] = useState<number[]>([])

	useEffect(() => {
		if (!user) {
			navigation.navigate('/onboarding')
		}
	}, [])

	const onPress = (index: number) => {
		if (intrests.indexOf(index) === -1) {
			setIntrests([...intrests, index])
		} else {
			setIntrests(intrests.filter(i => i !== index))
		}
	}

	const onSave = () => {
		navigation.navigate('/home')
	}

	return (
		<Container>
			<Content>
				<View style={styles.container}>
					<Header seamless center={<Title text="Select your intrests" />} />
					<FlatList
						style={styles.intrests}
						showsVerticalScrollIndicator={false}
						data={Object.keys(Pois)}
						numColumns={2}
						keyExtractor={() => Math.random().toString()}
						renderItem={({ index, item }) => (
							<Interest
								title={item}
								icon={''}
								selected={intrests.indexOf(index) != -1}
								onPress={() => onPress(index)}
							/>
						)}
					/>
					<Button text="Save" onPress={onSave} shadow />
				</View>
			</Content>
		</Container>
	)
}

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		height: '100%',
		paddingVertical: 50,
		justifyContent: 'space-between'
	},
	intrests: {
		marginBottom: 30,
		marginTop: 10,
		flexDirection: 'column',
		flex: 1
	}
})
