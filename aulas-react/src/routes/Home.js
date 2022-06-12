import { Link } from 'react-router-dom'

export const Home = () => {
   return (
      <>
         <h1>Bem-vindo!</h1>
         <Link to="/quemsomos">Descubra quem somos</Link>
      </>
   )
}
