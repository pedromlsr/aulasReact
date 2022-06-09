function exercicio1() {
   var ex1 = 'oi'

   document.getElementById('ex1').innerHTML = Grupo6.integrante1.endereco
}

const Grupo6 = {
   integrante1: {
      nome: 'Gabriel',
      idade: 17,
      endereco: {
         cidade: 'Petrópolis',
         estado: 'Rio de Janeiro'
      }
   },
   integrante2: {
      nome: 'Fabiano',
      idade: 34,
      endereco: {
         cidade: 'Petrópolis',
         estado: 'Rio de Janeiro'
      }
   },
   integrante3: {
      nome: 'Fábio',
      idade: 28,
      endereco: {
         cidade: 'Petrópolis',
         estado: 'Rio de Janeiro'
      }
   },
   integrante4: {
      nome: 'Larissa',
      idade: 18,
      endereco: {
         cidade: 'Petrópolis',
         estado: 'Rio de Janeiro'
      }
   },
   integrante5: {
      nome: 'Pedro',
      idade: 28,
      endereco: {
         cidade: 'Petrópolis',
         estado: 'Rio de Janeiro'
      }
   }
}

// console.log('Integrante 1: ', Grupo6.integrante1.nome)
// console.log('Integrante 2: ', Grupo6.integrante2.idade)
// console.log('Integrante 3: ', Grupo6.integrante3.endereco)
// console.log('Integrante 4: ', Grupo6.integrante4.endereco.cidade)
// console.log('Integrante 5: ', Grupo6.integrante5.endereco.estado)

for (var i = 0; i < 30; i++) {
   console.log('Integrante 1: ', Grupo6.integrante1.nome)
   console.log('Integrante 2: ', Grupo6.integrante2.idade)
   console.log('Integrante 3: ', Grupo6.integrante3.endereco)
   console.log('Integrante 4: ', Grupo6.integrante4.endereco.cidade)
   console.log('Integrante 5: ', Grupo6.integrante5.endereco.estado)
}

console.log(i)
