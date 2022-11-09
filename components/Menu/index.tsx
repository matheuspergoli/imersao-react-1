import React from 'react'
import Search from '../Search'
import ThemeButton from '../ThemeButton'
import { DarkModeContext } from '../../context/DarkModeContext'

function Menu() {
	const { darkMode } = React.useContext(DarkModeContext)

	return (
		<div className='flex items-center justify-between p-3'>
			{darkMode ? (
				<img src='/aluratube-dark.svg' alt='Logo AluraTube' className='hidden sm:block' />
			) : (
				<img src='/aluratube-light.svg' alt='Logo AluraTube' className='hidden sm:block' />
			)}
			<Search />
			<ThemeButton />
		</div>
	)
}

export default Menu
