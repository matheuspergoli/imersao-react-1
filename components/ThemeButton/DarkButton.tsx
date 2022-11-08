import React from 'react'
import { BsMoonFill as MoonIcon } from 'react-icons/bs'
import { DarkModeContext } from '../../context/DarkModeContext'

function DarkButton() {
	const { darkMode, setDarkMode } = React.useContext(DarkModeContext)

	function changeTheme() {
		const newTheme = darkMode === '' ? 'dark' : ''
		setDarkMode(newTheme)
		localStorage.setItem('theme', newTheme)
	}

	return (
		<button className='flex items-center gap-1 dark:text-textColorBase-dark' onClick={changeTheme}>
			<MoonIcon />
			Dark
		</button>
	)
}

export default DarkButton
