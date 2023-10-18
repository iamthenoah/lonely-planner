import { ScrollView, StyleSheet, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Result } from '../../../../types/poi'
import { Title } from '../../../../components/title'
import { Link } from '../../../../components/link'

export type TripDayProps = {
	pois: Result[]
	editable?: boolean
}

export const TripDay = ({ pois, editable }: TripDayProps) => {
	const navigation = useNavigation()

	return (
		<ScrollView style={styles.container}>
			{pois.map(poi => (
				<View>
					<Title text={poi.poi.name} />
				</View>
			))}
			{editable && <Link text="add Location" onPress={() => navigation.navigate('/trip/create/map' as never)} />}
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: '100%',
		backgroundColor: 'white'
	}
})
