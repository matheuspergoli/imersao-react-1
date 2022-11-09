import React from 'react'

interface SearchProps {
	search: string
	setSearch: React.Dispatch<React.SetStateAction<string>>
}

const defaultStates = {
	search: '',
	setSearch: () => {}
}

export const SearchContext = React.createContext<SearchProps>(defaultStates)

export function SearchContextProvider(props: { children: React.ReactNode }) {
	const [search, setSearch] = React.useState('')

	return <SearchContext.Provider value={{ search, setSearch }}>{props.children}</SearchContext.Provider>
}
