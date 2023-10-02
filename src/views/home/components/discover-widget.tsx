import { Image, StyleSheet, View } from 'react-native'
import { Widget } from '../../../components/widget'
import { Title } from '../../../components/title'
import { Link } from '../../../components/link'

export type DiscoverFooterProps = {
	name: string
	location: string
}

export type DiscoverProps = DiscoverFooterProps & {
	image: string
}

export const DiscoverWidget = ({ image, ...props }: DiscoverProps) => {
	return (
		<View style={styles.container}>
			<Widget footer={<Footer {...props} />}>
				<Image style={styles.image} source={{ uri: image }} />
			</Widget>
		</View>
	)
}

const Footer = ({ name, location }: DiscoverFooterProps) => {
	return (
		<View style={styles.footer}>
			<Title text={name} />
			<Link text={location} onClick={console.log} />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		paddingBottom: 15
	},
	image: {
		width: '100%',
		height: 150
	},
	footer: {
		paddingHorizontal: 15,
		paddingVertical: 10
	}
})
