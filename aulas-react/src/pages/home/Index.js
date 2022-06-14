import { Link } from 'react-router-dom'
import { useState } from 'react'

export const Home = () => {
   const [usuario] = useState(
      {
         nome: 'Pedro',
         idade: 28
      }
   )

   return (
      <>
         <h1>Bem-vindo!</h1>
         {/* <Link to="/quemsomos">Descubra quem somos</Link> */}
         <Link to={`/quemsomos/${usuario.nome}/${usuario.idade}`}>Descubra quem somos</Link>
      </>
   )
}
