import React from 'react'
import DarkButton from './DarkButton'
import LightButton from './LightButton'
import { DarkModeContext } from '../../context/DarkModeContext'

function ThemeButton() {
	const { darkMode } = React.useContext(DarkModeContext)

	return <div>{darkMode ? <LightButton /> : <DarkButton />}</div>
}

export default ThemeButton
