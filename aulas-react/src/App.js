// import { useState, useEffect } from 'react'
// import { ComponentePai } from './pages/ComponentePai'
// import { IndiretaPai } from './pages/IndiretaPai'
// import { Input } from './pages/Input'
// import { RendCond } from './pages/RendCond'
// import { AdicionarLista } from './pages/AdicionarLista'
import { Root } from './routes/root'

export default function App() {
   // const [nome, setNome] = useState()
   // const [count, setCount] = useState(0)

   // useEffect(() => {
   //    document.title = `Você clicou ${count} vezes`
   // }, [count])

   // const handleClick = () => {
   //    if (nome === 'Fulano') {
   //       setNome('')
   //    } else {
   //       setNome('Fulano')
   //    }
   // }

   return (
      <>
         {/* <div>
            <h1>Hello, {nome}</h1>
            <button onClick={handleClick}>Clique aqui</button>
         </div> */}
         {/* <div>
            <h1>Você clicou {count} vezes</h1>
            <button onClick={() => setCount(count + 1)}>Clique aqui</button>
         </div> */}
         {/* <ComponentePai /> */}
         {/* <IndiretaPai /> */}
         {/* <Input /> */}
         {/* <RendCond /> */}
         {/* <AdicionarLista /> */}
         <Root />
      </>
   )
}
