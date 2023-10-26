import { PropsWithChildren } from 'react'
import { Platform, SafeAreaView, View } from 'react-native'

export const Modal = ({ children }: PropsWithChildren) => {
	const Content = Platform.OS === 'android' ? SafeAreaView : View
	return <Content>{children}</Content>
}
