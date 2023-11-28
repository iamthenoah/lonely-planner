import { createContext, useContext, PropsWithChildren, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { PoiInterest } from '../types/poi'

export type Preferences = {
	interests: PoiInterest[]
}

const UserContext = createContext<{
	preferences: Preferences | null
	updateInterests: (interests: PoiInterest[]) => Promise<void>
}>(null as any)

export const useUser = () => useContext(UserContext)

export const UserProvider = ({ children }: PropsWithChildren) => {
	const [preferences, setPreferences] = useState<Preferences | null>(null)

	useEffect(() => {
		AsyncStorage.getItem('preferences').then(raw => raw && setPreferences(JSON.parse(raw)))
	}, [])

	const updateInterests = async (interests: PoiInterest[]) => {
		const preferences = { interests }
		await AsyncStorage.setItem('preferences', JSON.stringify(preferences))
		setPreferences(preferences)
	}

	return <UserContext.Provider value={{ updateInterests, preferences }}>{children}</UserContext.Provider>
}
