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

	React.useEffect(() => {
		const theme = localStorage.getItem('theme')
		setDarkMode(theme as string)
	}, [])

	return <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>{props.children}</DarkModeContext.Provider>
}
