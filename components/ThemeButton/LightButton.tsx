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
		<button className='flex items-center gap-1 py-1 px-3 rounded-md bg-backgroundLevel1-light text-textColorBase-light' onClick={changeTheme}>
			<SunIcon />
			Light
		</button>
	)
}

export default LightButton
