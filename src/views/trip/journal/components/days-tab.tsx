import { useState } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { Button } from '../../../../components/button'
import { IconButton } from '../../../../components/icon-button'

export type DaysTabProps = {
	initTab?: number
	days: number
	editable?: boolean
	onDayChange: (day: number) => void
	onDayAdded: (day: number) => void
}

export const DaysTab = ({ initTab = 0, days, editable, onDayChange, onDayAdded }: DaysTabProps) => {
	const [tab, setTab] = useState(initTab)

	const onPress = (day: number) => {
		setTab(day)
		onDayChange(day)
	}

	const onAdd = () => {
		onDayAdded(days + 1)
	}

	return (
		<View style={styles.container}>
			<ScrollView horizontal style={styles.content}>
				{Array(days)
					.fill(0)
					.map((_, day) => (
						<Button
							key={Math.random()}
							background="white"
							text={'Day ' + (day + 1)}
							foreground={day === tab ? '#0057D9' : '#6A6A6A'}
							onPress={() => onPress(day)}
						/>
					))}
				{editable && (
					<View style={styles.add}>
						<IconButton icon="add" onPress={onAdd} />
					</View>
				)}
			</ScrollView>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'white'
	},
	content: {
		paddingVertical: 5,
		marginHorizontal: 10,
		overflow: 'visible'
	},
	add: {
		alignItems: 'center',
		margin: 5
	}
})
