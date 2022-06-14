import { IndiretaFilho } from '../indireta-filho/IndiretaFilho'
import { useState } from 'react'

export const IndiretaPai = () => {
   const [pai, setPai] = useState({
      nome: '',
      idade: 0,
      nerd: false
   })

   function informacaoDoPai(nome, idade, nerd) {
      setPai({ nome: nome, idade: idade, nerd: nerd })
   }

   return (
      <>
         <h1>{pai.nome}</h1>
         <h1>{pai.idade}</h1>
         <h1>{pai.nerd ? 'Verdadeiro' : 'Falso'}</h1>
         <IndiretaFilho funcaoInformacoes={informacaoDoPai} />
      </>
   )
}
