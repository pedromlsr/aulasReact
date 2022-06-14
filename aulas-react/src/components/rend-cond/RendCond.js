import { useState } from 'react'

export const RendCond = () => {
   const [isLogado, setIsLogado] = useState(false)

   function SaudacaoUsuario() {
      return <h1>Bem-vindo de Volta!</h1>
   }

   function SaudacaoVisitante() {
      return <h1>Por favor, registre-se.</h1>
   }

   function logar() {
      setIsLogado(!isLogado)
   }

   function validarLoginLogoff(props) {
      if (props) {
         return <SaudacaoUsuario />
      }
      return <SaudacaoVisitante />
   }

   return (
      <>
         <div>
            {validarLoginLogoff(isLogado)}
            <button onClick={() => logar()}>
               {isLogado ? 'Logoff' : 'Login'}
            </button>
         </div>
      </>
   )
}
