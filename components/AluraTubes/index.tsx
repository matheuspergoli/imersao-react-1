import React from 'react'

function AluraTubes() {
	return (
		<article className='mt-10'>
			<h2 className='text-xl font-bold mb-2'>AluraTubes Favoritos</h2>
			<section className='flex items-center gap-2'>
				<figure className='flex flex-col justify-center items-center w-fit text-center'>
					<a href='https://github.com/peas' target='_blank' rel='noreferrer'>
						<img src='https://github.com/peas.png' alt='AluraTuber' className='w-20 rounded-full' />
					</a>
					<figcaption>@peas</figcaption>
				</figure>
				<figure className='flex flex-col justify-center items-center w-fit text-center'>
					<a href='https://github.com/omariosouto' target='_blank' rel='noreferrer'>
						<img src='https://github.com/omariosouto.png' alt='AluraTuber' className='w-20 rounded-full' />
					</a>
					<figcaption>@omariosouto</figcaption>
				</figure>
			</section>
		</article>
	)
}

export default AluraTubes
