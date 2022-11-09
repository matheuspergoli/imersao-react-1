import React from 'react'
import Menu from '../Menu'

function Banner() {
	return (
		<header className='transition bg-backgroundLevel1-light text-textColorBase-light dark:text-textColorBase-dark dark:bg-backgroundLevel1-dark'>
			<Menu />
			<figure className='h-72'>
				<img src='https://source.unsplash.com/random/?Programming' alt='Banner' className='w-full h-full object-cover' />
			</figure>
		</header>
	)
}

export default Banner
