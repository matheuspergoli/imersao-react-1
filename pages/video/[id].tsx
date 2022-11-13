import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Menu from '../../components/Menu'
import Banner from '../../components/Banner'
import Profile from '../../components/Profile'
import { DarkModeContext } from '../../context/DarkModeContext'

function Video() {
	const { darkMode } = React.useContext(DarkModeContext)
	const router = useRouter()
	const id = router.query.id

	return (
		<>
			<Head>
				<title>Video</title>
			</Head>
			<div className={darkMode ? 'dark' : ''}>
				<Menu />
				<Banner />
				<Profile />
				<main className='p-3 h-screen transition bg-backgroundBase-light text-textColorBase-light dark:text-textColorBase-dark dark:bg-backgroundBase-dark'>
					<Link
						href='/'
						className='block w-fit font-medium px-3 py-1 mb-5 rounded-md bg-backgroundBase-dark text-textColorBase-dark dark:text-textColorBase-light dark:bg-backgroundBase-light'>
						Voltar
					</Link>
					<iframe src={`https://youtube.com/embed/${id}`} allowFullScreen className='max-w-4xl w-full h-iframe-video mx-auto'></iframe>
				</main>
			</div>
		</>
	)
}

export default Video
