export const ListaCompras = props => {
   return (
      <>
         <h1>Lista de compras:</h1>
         {props.lista.map(res => (
            <li>{res}</li>
         ))}
      </>
   )
}
