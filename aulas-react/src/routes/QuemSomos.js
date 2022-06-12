import { useParams, useNavigate } from 'react-router-dom'

export const QuemSomos = () => {
   let { nome } = useParams()
   let navigate = useNavigate()

   function handleClick() {
      navigate('/')
   }

   return (
      <>
         <h2>Olá, {nome}</h2>
         <h2>Somos o Grupo 6!</h2>
         <button onClick={handleClick}>Voltar para home</button>
      </>
   )
}
