import { useState } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { Button } from '../../../../components/button'
import { IconButton } from '../../../../components/icon-button'

export type DaysTabProps = {
	days: number
	editable?: boolean
	onDayChange: (day: number) => void
	onDayAdd: (day: number) => void
}

export const DaysTab = ({ days, editable, onDayChange, onDayAdd }: DaysTabProps) => {
	const [tab, setTab] = useState(0)

	const onPress = (day: number) => {
		setTab(day)
		onDayChange(day)
	}

	const onAdd = () => {
		onDayAdd(days + 1)
	}

	return (
		<View style={styles.container}>
			<ScrollView horizontal style={styles.content}>
				{Array(days + 1)
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
		paddingVertical: 10,
		marginHorizontal: 10
	},
	add: {
		alignItems: 'center',
		margin: 5
	}
})
