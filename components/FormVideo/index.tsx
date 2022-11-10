import React from 'react'
import { Formik, Form, Field } from 'formik'
import FormValidation from '../../validation/FormValidation'
import { AiFillCloseCircle as CloseIcon } from 'react-icons/ai'

function FormVideo() {
	const dialogRef = React.useRef<any>()

	function showModal() {
		if (!dialogRef.current.hasAttribute('open')) {
			dialogRef.current.showModal()
		}
	}

	function sendVideo(video: { title: string; url: string }) {
		fetch('https://aluratube-1.vercel.app/api/playlist', {
			method: 'POST',
			body: JSON.stringify(video)
		})
		closeModal()
		window.location.reload()
	}

	function closeModal() {
		dialogRef.current.close()
	}

	return (
		<>
			<dialog ref={dialogRef} className='transition max-w-sm w-full backdrop:bg-black backdrop:bg-opacity-70 bg-backgroundLevel1-dark'>
				<Formik validationSchema={FormValidation} onSubmit={(values) => sendVideo(values)} initialValues={{ title: '', url: '' }}>
					{({ errors, touched }) => (
						<Form className='flex flex-col items-center justify-center'>
							<button
								className='flex items-center justify-center rounded-full text-2xl font-semibold absolute top-2 right-4 text-white'
								type='button'
								onClick={closeModal}>
								<CloseIcon />
							</button>
							<div className='flex flex-col items-center justify-center gap-5 mt-10 mb-5 relative w-full'>
								<div className='w-full'>
									<Field id='title' name='title' type='text' placeholder='Título' className='p-1 rounded-md outline-none w-full' />
									{errors.title && touched.title && <p className='text-center text-red-500'>{errors.title}</p>}
								</div>
								<div className='w-full'>
									<Field id='url' name='url' type='text' placeholder='URL' className='p-1 rounded-md outline-none w-full' />
									{errors.url && touched.url && <p className='text-center text-red-500'>{errors.url}</p>}
								</div>
							</div>
							<button className='w-full p-1 rounded-md bg-backgroundLevel1-light' type='submit'>
								Enviar
							</button>
						</Form>
					)}
				</Formik>
			</dialog>
			<button
				className='flex items-center justify-center rounded-full fixed bottom-4 right-4 w-14 h-14 z-10 text-xl font-bold bg-red-600'
				onClick={showModal}>
				+
			</button>
		</>
	)
}

export default FormVideo
