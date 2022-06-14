import { ComponenteFilho } from '../componente-filho/ComponenteFilho'

export const ComponentePai = () => {
   return (
      <>
         <ComponenteFilho nome="Pedro" idade={28} nerd={true} />
      </>
   )
}
