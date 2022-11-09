import React from 'react'
import Head from 'next/head'
import Slide from '../components/Slide'
import { GetServerSideProps } from 'next'
import Banner from '../components/Banner'
import Profile from '../components/Profile'
import { DarkModeContext } from '../context/DarkModeContext'
import { SearchContext } from '../context/SearchContext'

interface DataProps {
	data: {
		frontend: {
			title: string
			link: string
			thumb: string
		}[]
		musicas: {
			title: string
			link: string
			thumb: string
		}[]
		podcasts: {
			title: string
			link: string
			thumb: string
		}[]
	}
}

export const getServerSideProps: GetServerSideProps = async () => {
	const response = await fetch('https://aluratube-1.vercel.app/api/playlist')
	const data = await response.json()

	return {
		props: { data }
	}
}

function Home(props: DataProps) {
	const { darkMode } = React.useContext(DarkModeContext)
	const { search } = React.useContext(SearchContext)

	return (
		<div className={darkMode ? 'dark' : ''}>
			<Head>
				<title>AluraTube</title>
			</Head>
			<Banner />
			<Profile />
			<main className='p-3 h-screen bg-backgroundBase-light text-textColorBase-light dark:text-textColorBase-dark dark:bg-backgroundBase-dark'>
				<Slide
					title='Podcasts'
					data={search ? props.data.podcasts.filter((video) => video.title.toLowerCase().includes(search.toLowerCase())) : props.data.podcasts}
				/>
				<Slide
					title='Músicas'
					data={search ? props.data.musicas.filter((video) => video.title.toLowerCase().includes(search.toLowerCase())) : props.data.musicas}
				/>
				<Slide
					title='Front-end'
					data={search ? props.data.frontend.filter((video) => video.title.toLowerCase().includes(search.toLowerCase())) : props.data.frontend}
				/>

				<h2 className='text-xl font-bold mb-2 mt-10'>AluraTubes Favoritos</h2>
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
			</main>
		</div>
	)
}

export default Home
