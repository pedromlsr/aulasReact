import { useState } from 'react'
import { ListaCompras } from '../lista-compras/ListaCompras'

export const AdicionarLista = () => {
   const [lista, setLista] = useState([])
   const [item, setItem] = useState('')

   function handleAdd() {
      setLista([...lista, item])
      setItem('')
   }

   return (
      <>
         <input
            type="text"
            value={item}
            onChange={e => setItem(e.target.value)}
         />
         <button onClick={handleAdd}>Adicionar</button>
         <div>
            <ListaCompras lista={lista} />
         </div>
      </>
   )
}
