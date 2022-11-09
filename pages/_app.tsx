import '../styles/global.css'
import type { AppProps } from 'next/app'
import { DarkModeContextProvider } from '../context/DarkModeContext'
import { SearchContextProvider } from '../context/SearchContext'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<DarkModeContextProvider>
			<SearchContextProvider>
				<Component {...pageProps} />
			</SearchContextProvider>
		</DarkModeContextProvider>
	)
}
