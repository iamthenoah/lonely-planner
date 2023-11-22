import { createContext, useContext, PropsWithChildren, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { PoiInterest } from '../types/poi'

export type Preferences = {
	interests: PoiInterest[]
}

const UserContext = createContext<{
	preferences: Preferences | null
}>(null as any)

export const useUser = () => useContext(UserContext)

export const TripProvider = ({ children }: PropsWithChildren) => {
	const [preferences, setPreferences] = useState<Preferences | null>(null)

	useEffect(() => {
		AsyncStorage.getItem('preferences').then(raw => setPreferences(raw ? JSON.parse(raw) : null))
	}, [])

	return <UserContext.Provider value={{ preferences }}>{children}</UserContext.Provider>
}
