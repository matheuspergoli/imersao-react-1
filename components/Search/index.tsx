import React from 'react'
import { SearchContext } from '../../context/SearchContext'

function Search() {
	const { search, setSearch } = React.useContext(SearchContext)

	return (
		<div className='flex items-center w-full max-w-sm mr-10 sm:mr-0'>
			<input
				type='search'
				name='search'
				id='search'
				placeholder='Buscar...'
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				className='w-full border p-1 outline-none transition dark:border-borderBase-dark dark:bg-backgroundBase-dark'
			/>
			<button className='border p-1 w-16 text-center transition bg-backgroundLevel2-light dark:bg-backgroundLevel2-dark dark:border-borderBase-dark'>
				🔎
			</button>
		</div>
	)
}

export default Search
