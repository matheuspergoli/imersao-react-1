import React from 'react'
import Head from 'next/head'
import { GetStaticProps } from 'next'
import Menu from '../components/Menu'
import Slide from '../components/Slide'
import Banner from '../components/Banner'
import Profile from '../components/Profile'
import FormVideo from '../components/FormVideo'
import AluraTubes from '../components/AluraTubes'
import { GraphQLClient, gql } from 'graphql-request'
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

const query = gql`
	query {
		allPhonks {
			id
			link
			thumb
			title
		}
		allWarcrafts {
			id
			link
			title
			thumb
		}
		allSuggestions {
			id
			link
			thumb
			title
		}
	}
`

export const getStaticProps: GetStaticProps = async () => {
	const API_KEY = process.env.PUBLIC_API_KEY
	const endpoint = 'https://graphql.datocms.com/'

	const response = await fetch('https://aluratube-1.vercel.app/api/playlist', { cache: 'force-cache' })
	const videos = await response.json()

	const graphQLClient = new GraphQLClient(endpoint, {
		headers: {
			'content-type': 'application/json',
			authorization: 'Bearer ' + API_KEY
		}
	})
	const cmsVideos = await graphQLClient.request(query)

	const data = { ...videos, ...cmsVideos }

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
	const { search } = React.useContext(SearchContext)
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
				<Slide title='Sugestões' data={filterDataBySearch(props.data.allSuggestions)} />
				<Slide title='World of Wacraft' data={filterDataBySearch(props.data.allWarcrafts)} />
				<Slide title='Phonk' data={filterDataBySearch(props.data.allPhonks)} />
				<Slide title='Podcasts' data={filterDataBySearch(props.data.podcasts)} />
				<Slide title='Músicas' data={filterDataBySearch(props.data.musicas)} />
				<Slide title='Front-end' data={filterDataBySearch(props.data.frontend)} />

				<AluraTubes />
			</main>
		</div>
	)
}

export default Home
