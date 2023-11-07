import { useNavigation } from '@react-navigation/native'
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import { PlaceTimeProps } from '../views/place/components/place-time'
import { PlaceInfo } from '../types/api'
import { getImage } from '../apis/google'
import { formatHours } from './date-input'
import { Info } from './info'

export const truncate = (text: string, size: number) => {
	return text.length > size ? text.substring(0, size) + '...' : text
}

export type PlaceButtonProps = {
	place: PlaceInfo
	info?: PlaceTimeProps
}

export const PlaceButton = ({ place, info }: PlaceButtonProps) => {
	const navigation = useNavigation<any>()

	const onPress = () => {
		navigation.navigate('/place', { info, place })
	}

	return (
		<TouchableOpacity onPress={onPress} style={styles.container}>
			{place.photos && <Image style={styles.image} source={{ uri: getImage(place.photos[0].photo_reference) }} />}
			<View>
				<Info
					flipped
					text={truncate(place.name, 17)}
					comment={info ? 'At ' + formatHours(new Date(info.time)) : truncate(place.formatted_address, 30)}
				/>
			</View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'row',
		gap: 20
	},
	image: {
		borderRadius: 10,
		width: 50,
		height: 50
	}
})
