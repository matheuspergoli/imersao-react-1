import React from 'react'
import { Formik, Form, Field } from 'formik'
import { RiVideoAddFill as AddIcon } from 'react-icons/ri'
import FormValidation from '../../validation/FormValidation'
import { IoMdCloseCircle as CloseIcon } from 'react-icons/io'

function FormVideo() {
	const [loading, setLoading] = React.useState(false)
	const dialogRef = React.useRef<any>()

	function showModal() {
		if (!dialogRef.current.hasAttribute('open')) {
			dialogRef.current.showModal()
		}
	}

	async function sendVideo(video: { title: string; url: string }) {
		setLoading(true)
		await fetch('https://aluratube-1.vercel.app/api/playlist', {
			method: 'POST',
			body: JSON.stringify(video)
		})
		setLoading(false)
		closeModal()
		window.location.reload()
	}

	function closeModal() {
		dialogRef.current.close()
	}

	return (
		<>
			<dialog
				ref={dialogRef}
				className='transition max-w-sm w-full backdrop:bg-opacity-70 backdrop:bg-black bg-backgroundLevel1-light dark:bg-backgroundLevel1-dark'>
				<Formik validationSchema={FormValidation} onSubmit={(values) => sendVideo(values)} initialValues={{ title: '', url: '' }}>
					{({ errors, touched }) => (
						<Form className='flex flex-col items-center justify-center'>
							<button
								className='flex items-center justify-center rounded-full text-2xl font-semibold absolute top-2 right-4 text-white'
								type='button'
								onClick={closeModal}>
								<CloseIcon className='text-black dark:text-white' />
							</button>
							<div className='flex flex-col items-center justify-center gap-5 mt-10 mb-5 relative w-full'>
								<div className='w-full'>
									<Field
										id='title'
										name='title'
										type='text'
										placeholder='Título'
										className='p-1 rounded-md outline-none w-full text-white bg-backgroundLevel1-dark dark:bg-backgroundLevel1-light dark:text-black'
									/>
									{errors.title && touched.title && <p className='text-center text-red-500'>{errors.title}</p>}
								</div>
								<div className='w-full'>
									<Field
										id='url'
										name='url'
										type='text'
										placeholder='URL'
										className='p-1 rounded-md outline-none w-full text-white bg-backgroundLevel1-dark dark:bg-backgroundLevel1-light dark:text-black'
									/>
									{errors.url && touched.url && <p className='text-center text-red-500'>{errors.url}</p>}
								</div>
							</div>
							<button
								className='w-full p-1 rounded-md text-white bg-backgroundLevel1-dark dark:text-black dark:bg-backgroundLevel1-light'
								type='submit'>
								{loading ? 'Enviando...' : 'Enviar'}
							</button>
						</Form>
					)}
				</Formik>
			</dialog>
			<button
				className='flex items-center justify-center rounded-full fixed bottom-4 right-4 w-14 h-14 z-10 text-xl font-bold bg-red-600'
				onClick={showModal}>
				<AddIcon className='text-white' />
			</button>
		</>
	)
}

export default FormVideo
