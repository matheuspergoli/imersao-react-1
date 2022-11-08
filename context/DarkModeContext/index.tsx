import React from 'react'

interface DarkModeProps {
	darkMode: string
	setDarkMode: React.Dispatch<React.SetStateAction<string>>
}

const defaultStates = {
	darkMode: '',
	setDarkMode: () => {}
}

export const DarkModeContext = React.createContext<DarkModeProps>(defaultStates)

export function DarkModeContextProvider(props: { children: React.ReactNode }) {
	const [darkMode, setDarkMode] = React.useState('')

	return <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>{props.children}</DarkModeContext.Provider>
}
