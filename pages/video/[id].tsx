import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Banner from '../../components/Banner'
import Profile from '../../components/Profile'
import { DarkModeContext } from '../../context/DarkModeContext'
import Link from 'next/link'

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
				<Banner />
				<Profile />
				<main className='p-3 h-screen transition bg-backgroundBase-light text-textColorBase-light dark:text-textColorBase-dark dark:bg-backgroundBase-dark'>
					<Link
						href='/'
						className='font-medium px-3 py-1 rounded-md bg-backgroundBase-dark text-textColorBase-dark dark:text-textColorBase-light dark:bg-backgroundBase-light'>
						Voltar
					</Link>
					<iframe src={`https://youtube.com/embed/${id}`} allowFullScreen className='max-w-2xl w-full h-96 mx-auto'></iframe>
				</main>
			</div>
		</>
	)
}

export default Video
