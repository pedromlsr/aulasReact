export function ComponenteFilho({ nome, idade, nerd }) {
   return (
      <>
         <h1>{nome}</h1>
         <h2>{idade}</h2>
         <h2>{nerd ? 'Verdadeiro' : 'Falso'}</h2>
      </>
   )
}
