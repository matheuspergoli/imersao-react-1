import React from 'react'
import Head from 'next/head'
import Menu from '../components/Menu'
import Slide from '../components/Slide'
import Banner from '../components/Banner'
import { GetServerSideProps } from 'next'
import Profile from '../components/Profile'
import FormVideo from '../components/FormVideo'
import AluraTubes from '../components/AluraTubes'
import useSearchContext from '../context/useSearchContext'
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
		novos: {
			title: string
			link: string
			thumb: string
		}[]
		allPhonks: {
			title: string
			link: string
			thumb: string
		}[]
		allWarcrafts: {
			title: string
			link: string
			thumb: string
		}[]
		allSuggestions: {
			title: string
			link: string
			thumb: string
		}[]
	}
}

export const getServerSideProps: GetServerSideProps = async () => {
	const response = await fetch('https://aluratube-1.vercel.app/api/playlist')
	const videos = await response.json()

	const data = { ...videos }

	return {
		props: { data }
	}
}

interface FilterDataProps {
	title: string
	link: string
	thumb: string
}

function Home(props: DataProps) {
	const { search } = useSearchContext()
	const { darkMode } = React.useContext(DarkModeContext)

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
			<FormVideo />
			<main className='p-3 transition bg-backgroundBase-light text-textColorBase-light dark:text-textColorBase-dark dark:bg-backgroundBase-dark'>
				<Slide title='Novos' data={filterDataBySearch(props.data.novos)} />
				<Slide title='Podcasts' data={filterDataBySearch(props.data.podcasts)} />
				<Slide title='Músicas' data={filterDataBySearch(props.data.musicas)} />
				<Slide title='Front-end' data={filterDataBySearch(props.data.frontend)} />
				<AluraTubes />
			</main>
		</div>
	)
}

export default Home
