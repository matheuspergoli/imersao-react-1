import React from 'react'

function Banner() {
	return (
		<header className='bg-backgroundLevel1-light text-textColorBase-light dark:text-textColorBase-dark dark:bg-backgroundLevel1-dark'>
			<figure className='p-3'>
				<img src='/aluratube.svg' alt='Logo AluraTube' />
			</figure>
			<figure className='h-72'>
				<img src='https://source.unsplash.com/random/?Programming' alt='Banner' className='w-full h-full object-cover' />
			</figure>
		</header>
	)
}

export default Banner
