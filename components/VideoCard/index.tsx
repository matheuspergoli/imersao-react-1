import React from 'react'
import Link from 'next/link'

interface VideoProps {
	title: string
	link: string
	thumb: string
}

function VideoCard(props: VideoProps) {
	return (
		<article className='w-48 overflow-hidden md:mx-0 mx-auto'>
			<Link href={props.link}>
				<img src={props.thumb} alt={props.title} className='transition hover:scale-105' />
				<h2 className='mt-1 leading-5'>{props.title}</h2>
			</Link>
		</article>
	)
}

export default VideoCard
