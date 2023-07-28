import { create } from 'zustand'

interface SearchState {
	search: string
	setSearch: (search: string) => void
}

const useSearchContext = create<SearchState>()((set) => ({
	search: '',
	setSearch: (search: string) => set((state) => ({ search }))
}))

export default useSearchContext
