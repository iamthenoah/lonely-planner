import { StyleSheet, TextInput, TextInputProps } from 'react-native'

export type SearchBarProps = Omit<TextInputProps, 'onSubmitEditing' | 'returnKeyType'> & {
	onSubmit: (value: string) => void
}

export const SearchBar = ({ placeholder, onSubmit, ...props }: SearchBarProps) => {
	return (
		<TextInput
			autoFocus
			style={styles.container}
			returnKeyType="search"
			placeholder={placeholder}
			onSubmitEditing={e => onSubmit(e.nativeEvent.text)}
			{...props}
		/>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#F5F5F5',
		borderRadius: 15,
		padding: 15,
		marginVertical: 10,
		fontSize: 16,
		color: '#9B9B9B'
	}
})
