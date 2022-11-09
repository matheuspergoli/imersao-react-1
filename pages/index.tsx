import React from 'react'
import Head from 'next/head'
import Menu from '../components/Menu'
import Slide from '../components/Slide'
import { GetServerSideProps } from 'next'
import Banner from '../components/Banner'
import Profile from '../components/Profile'
import { SearchContext } from '../context/SearchContext'
import { DarkModeContext } from '../context/DarkModeContext'

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

interface FilterDataProps {
	title: string
	link: string
	thumb: string
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

	function filterDataBySearch(data: Array<FilterDataProps>) {
		return search ? data.filter((video) => video.title.toLowerCase().includes(search.toLowerCase())) : data
	}

	return (
		<div className={darkMode ? 'dark' : ''}>
			<Head>
				<title>AluraTube</title>
			</Head>
			<Menu />
			<Banner />
			<Profile />
			<main className='p-3 h-screen transition bg-backgroundBase-light text-textColorBase-light dark:text-textColorBase-dark dark:bg-backgroundBase-dark'>
				<Slide title='Podcasts' data={filterDataBySearch(props.data.podcasts)} />
				<Slide title='Músicas' data={filterDataBySearch(props.data.musicas)} />
				<Slide title='Front-end' data={filterDataBySearch(props.data.frontend)} />

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
