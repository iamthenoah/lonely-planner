import { useState } from 'react'
import { Widget } from '../../../components/widget'
import { Title } from '../../../components/title'

export type InterestProps = {
	title: string
	icon: string
	onSelected: () => void
	onDeselected: () => void
}

export const Interest = ({ title, icon, onSelected, onDeselected }: InterestProps) => {
	const [selected, setSelected] = useState(false)

	const onPress = () => {
		setSelected(true)
		console.log(selected)
		selected ? onSelected() : onDeselected()
	}

	return (
		<Widget onPress={onPress} style={{ borderColor: selected ? '#0057D9' : '#EDEEEF', borderWidth: selected ? 4 : 2 }}>
			<Title text={title} />
		</Widget>
	)
}
