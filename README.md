# AluraTube

Projeto da Imersão React 5 da Alura

[Site online - AluraTube](https://aluratube-1.vercel.app/)

![AluraTube](/public/aluratube-screen.png 'AluraTube NextJS')

## Tecnologias que utilizei

- NextJS
- ReactJS
- Typescript
- TailwindCSS
- SwiperJS
- React Icons
- Formik
- Yup
- DatoCMS

## Mudanças que fiz no projeto

- Ao contrário do que é feito nas aulas, eu escolhi TailwindCSS para fazer os estilos ao invés do Styled-Components.

- Todos os dados dos vídeos são armazenados na API que eu criei no Next, um tópico que eu venho querendo aprender a utilizar melhor e essa foi
  a oportunidade perfeita para por em prática.

- Todos os requests na API foram feitos no servidor atráves da função getServerSideProps do NextJS

- Ao clicar em adicionar um novo vídeo, é feito um POST Request na API feita no Next e então é adicionado ao site.

- Foi utilizado o SwiperJS para fazer os Slides de vídeos.

- O Switcher do Dark Mode foi feito diferente, e utilizei a biblioteca React Icons para pegar os icones.

- O modal para adicionar novos vídeos foi feito com a tag Dialog do HTML.

- O formulário foi feito com Formik e as validações com Yup.

- Utilizei o DatoCMS para criar uma nova playlist de vídeos vindo diretamente de uma API GraphQL