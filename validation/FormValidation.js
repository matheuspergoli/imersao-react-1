import * as Yup from 'yup'

const FormValidation = Yup.object().shape({
	title: Yup.string().min(1, 'Preencha com o nome do Vídeo').required('Campo obrigatório'),
	url: Yup.string().min(1, 'Preencha com a URL do vídeo').required('Campo obrigatório')
})

export default FormValidation
