export function IndiretaFilho(props) {
   return (
      <>
         <button onClick={() => props.funcaoInformacoes('Sergio', 63, true)}>
            Buscar informações
         </button>
      </>
   )
}
