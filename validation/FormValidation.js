import * as Yup from 'yup'

const regExYoutubeURL =
	/^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube(-nocookie)?\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/

const FormValidation = Yup.object().shape({
	title: Yup.string().min(10, 'Título deve ter no mínimo 10 caracteres').required('Campo obrigatório'),
	url: Yup.string()
		.min(20, 'Certifique-se de colocar uma URL válida de no mínimo 20 caracteres')
		.matches(regExYoutubeURL, 'Preencha com uma URL válida')
		.required('Campo obrigatório')
})

export default FormValidation
