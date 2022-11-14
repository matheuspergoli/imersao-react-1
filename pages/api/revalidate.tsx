import { NextApiRequest, NextApiResponse } from 'next'

async function handler(req: NextApiRequest, res: NextApiResponse) {
	let revalidated = false
	try {
		await res.revalidate('https://aluratube-1.vercel.app')
		revalidated = true
	} catch (error) {
		console.log(error)
	}
	res.json({ revalidated })
}

export default handler
