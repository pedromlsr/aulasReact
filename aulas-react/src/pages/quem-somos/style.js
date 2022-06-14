import styled from 'styled-components'

export const Container = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
`

export const FirstText = styled.div`
   background: blue;
   font-size: 2rem;
   color: white;
`

export const SecondText = styled.div`
   background: red;
   font-size: 2rem;
   color: black;
`

export const AulaButton = styled.button`
   cursor: pointer;
   background: transparent;
   font-size: 1rem;
   color: red;
   border: 2px solid red;
   border-radius: 0.5rem;
   margin-top: 1rem;
   &:hover{
      background-color: blue;
      color: white;
   }
`
