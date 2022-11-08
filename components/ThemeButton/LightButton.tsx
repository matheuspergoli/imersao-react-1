import React from 'react'
import { BsFillSunFill as SunIcon } from 'react-icons/bs'
import { DarkModeContext } from '../../context/DarkModeContext'

function LightButton() {
	const { darkMode, setDarkMode } = React.useContext(DarkModeContext)

	function changeTheme() {
		const newTheme = darkMode === '' ? 'dark' : ''
		setDarkMode(newTheme)
		localStorage.setItem('theme', newTheme)
	}

	return (
		<button className='flex items-center gap-1 dark:text-textColorBase-dark' onClick={changeTheme}>
			<SunIcon />
			Light
		</button>
	)
}

export default LightButton
