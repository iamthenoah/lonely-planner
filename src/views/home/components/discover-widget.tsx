import { Image, StyleSheet, View } from 'react-native'
import { Widget } from '../../../components/elements/generics/widget'
import { Title } from '../../../components/elements/generics/title'
import { Link } from '../../../components/elements/generics/link'

export type FooterProps = {
	name: string
	location: string
}

export type TripWidgetProps = FooterProps & {
	image: string
}

export const DiscoverWidget = ({ image, ...props }: TripWidgetProps) => {
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
