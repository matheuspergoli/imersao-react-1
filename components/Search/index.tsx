import React from 'react'

function Search() {
	return (
		<div className='flex items-center w-full max-w-sm'>
			<input
				type='search'
				name='search'
				id='search'
				placeholder='Buscar...'
				className='w-full border p-1 outline-none dark:border-borderBase-dark dark:bg-backgroundBase-dark'
			/>
			<button className='border p-1 w-16 text-center bg-backgroundLevel2-light dark:bg-backgroundLevel2-dark dark:border-borderBase-dark'>
				🔎
			</button>
		</div>
	)
}

export default Search
