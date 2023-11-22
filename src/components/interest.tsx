import { useState } from 'react'
import { Widget } from './widget'
import { Title } from './title'

export type InterestProps = {
	title: string
	icon: string
	onSelected: () => void
	onDeselected: () => void
}

export const Interest = ({ title, icon, onSelected, onDeselected }: InterestProps) => {
	const [selected, setSelected] = useState(false)

	const onPress = () => {
		setSelected(!selected)
		selected ? onSelected() : onDeselected()
	}

	return (
		<Widget
			onPress={onPress}
			shadow={selected}
			style={{ borderColor: selected ? '#0057D9' : '#EDEEEF', borderWidth: selected ? 4 : 2 }}
		>
			<Title text={title} />
		</Widget>
	)
}
