import React from 'react'
import { DarkModeContext } from '../../context/DarkModeContext'
import Search from '../Search'
import ThemeButton from '../ThemeButton'

function Banner() {
	const { darkMode } = React.useContext(DarkModeContext)

	return (
		<header className='transition bg-backgroundLevel1-light text-textColorBase-light dark:text-textColorBase-dark dark:bg-backgroundLevel1-dark'>
			<div className='flex items-center justify-between p-3'>
				{darkMode ? (
					<img src='/aluratube-dark.svg' alt='Logo AluraTube' className='hidden sm:block' />
				) : (
					<img src='/aluratube-light.svg' alt='Logo AluraTube' className='hidden sm:block' />
				)}
				<Search />
				<ThemeButton />
			</div>
			<figure className='h-72'>
				<img src='https://source.unsplash.com/random/?Programming' alt='Banner' className='w-full h-full object-cover' />
			</figure>
		</header>
	)
}

export default Banner
