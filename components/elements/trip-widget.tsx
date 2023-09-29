import { Image, StyleSheet, View } from 'react-native'
import { Widget } from './generics/widget'
import { Title } from './generics/title'
import { Link } from './generics/link'

export type FooterProps = {
	name: string
	location: string
}

export type TripWidgetProps = FooterProps & {
	image: string
}

export const TripWidget = ({ image, ...props }: TripWidgetProps) => {
	return (
		<View style={styles.container}>
			<Widget footer={<Footer {...props} />}>
				<Image style={{ width: '100%', height: 150 }} source={{ uri: image }} />
			</Widget>
		</View>
	)
}

const Footer = ({ name, location }: FooterProps) => {
	return (
		<View style={styles.footer}>
			<Title text={name} />
			<Link text={location} />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		paddingBottom: 15
	},
	footer: {
		paddingHorizontal: 15,
		paddingVertical: 10
	}
})
