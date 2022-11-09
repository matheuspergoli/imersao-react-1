import React from 'react'
import Search from '../Search'
import ThemeButton from '../ThemeButton'
import { DarkModeContext } from '../../context/DarkModeContext'
import Link from 'next/link'

function Menu() {
	const { darkMode } = React.useContext(DarkModeContext)

	return (
		<nav className='flex items-center justify-between p-3 transition bg-backgroundLevel1-light text-textColorBase-light dark:text-textColorBase-dark dark:bg-backgroundLevel1-dark'>
			{darkMode ? (
				<Link href='/'>
					<img src='/aluratube-dark.svg' alt='Logo AluraTube' className='hidden sm:block' />
				</Link>
			) : (
				<Link href='/'>
					<img src='/aluratube-light.svg' alt='Logo AluraTube' className='hidden sm:block' />
				</Link>
			)}
			<Search />
			<ThemeButton />
		</nav>
	)
}

export default Menu
