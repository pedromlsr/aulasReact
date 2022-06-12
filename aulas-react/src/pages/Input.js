import { useEffect, useState } from 'react'
import { Mostrar } from './Mostrar'

export const Input = () => {
   const [nome, setNome] = useState('inicial')

   function handleChange(e) {
      setNome(e.target.value)
   }

   useEffect(() => {
      document.title = `Oi, ${nome}`
   }, [nome])

   return (
      <>
         <div>
            {/* <label>Nome: {nome}</label> */}
            <label>
               Nome: <Mostrar nome={nome} />
            </label>
         </div>
         <div>
            <input type="text" value={nome} onChange={e => handleChange(e)} />
         </div>
      </>
   )
}
