import React from 'react'

function Profile() {
	return (
		<article className='flex items-center gap-2 p-3'>
			<figure className='w-16'>
				<img src='https://github.com/matheuspergoli.png' alt='Profile image' className='rounded-full border' />
			</figure>
			<div>
				<h2 className='flex items-center gap-2 text-xl font-bold'>
					Matheus Pergoli <span className='font-normal text-sm'>(Heizmen)</span>
				</h2>
				<p>Desenvolvedor Front-end</p>
			</div>
		</article>
	)
}

export default Profile
