import React from 'react'
import { DarkModeContext } from '../../context/DarkModeContext'

function Banner() {
	const { darkMode } = React.useContext(DarkModeContext)

	return (
		<header className='bg-backgroundLevel1-light text-textColorBase-light dark:text-textColorBase-dark dark:bg-backgroundLevel1-dark'>
			<figure className='p-3'>
				{darkMode ? <img src='/aluratube-dark.svg' alt='Logo AluraTube' /> : <img src='/aluratube-light.svg' alt='Logo AluraTube' />}
			</figure>
			<figure className='h-72'>
				<img src='https://source.unsplash.com/random/?Programming' alt='Banner' className='w-full h-full object-cover' />
			</figure>
		</header>
	)
}

export default Banner
