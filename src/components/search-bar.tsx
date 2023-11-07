import { Keyboard, StyleSheet, TextInput, TextInputProps, View } from 'react-native'
import { useRecognition } from '../hooks/use-recognition'
import { IconButton } from './icon-button'
import { useEffect, useState } from 'react'

export type SearchBarProps = Omit<TextInputProps, 'onSubmitEditing' | 'returnKeyType'> & {
	onSubmit: (value: string) => void
}

export const SearchBar = ({ placeholder, onSubmit, ...props }: SearchBarProps) => {
	const [value, setValue] = useState('')
	const rec = useRecognition('en-US')

	useEffect(() => {
		const transcript = rec.recognition?.transcript

		if (transcript) {
			onSubmit(transcript)
			setValue(transcript)
			Keyboard.dismiss()
		}
	}, [rec.recognition?.transcript])

	const onPress = () => {
		rec.isRecording ? rec.stopRecording() : rec.startRecording()
	}

	return (
		<View style={styles.container}>
			<TextInput
				style={styles.input}
				value={value}
				returnKeyType="search"
				placeholder={placeholder}
				onChangeText={setValue}
				onSubmitEditing={e => onSubmit(e.nativeEvent.text)}
				{...props}
			/>
			<IconButton icon="mic" onPress={onPress} seamless color={rec.isRecording ? 'red' : undefined} />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#F5F5F5',
		borderRadius: 15,
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: 'row'
	},
	input: {
		fontSize: 16,
		color: '#9B9B9B',
		flex: 1,
		paddingHorizontal: 15,
		paddingVertical: 13
	}
})
