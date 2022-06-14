import { useParams, useNavigate } from 'react-router-dom'
import { Container, FirstText, SecondText, AulaButton } from './style.js'

export const QuemSomos = () => {
   var { nome } = useParams()
   var { idade } = useParams()
   var navigate = useNavigate()

   function handleClick() {
      navigate('/')
   }

   return (
      <>
         <Container>
            <FirstText>
               <h2>Olá, {nome}</h2>
            </FirstText>
            <SecondText>
               <h3>Você tem {idade} anos</h3>
            </SecondText>
            <h2>Somos o Grupo 6!</h2>
            <AulaButton onClick={handleClick}>
               Voltar para home
            </AulaButton>
         </Container>
      </>
   )
}
