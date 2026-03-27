import { useState } from 'react'
import {Alo, Saudacao, Perfil, Painel, Componente, PlacarFutebol} from './a.tsx'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Perfil nome={'Andre'} cargo={'Padeiro'}/>
      <Painel/>
      <Alo/>
      <Saudacao/>
      <Componente nome={'Bruno'} hobby={'Desenhar Gaivotas'} idade={'mais de 2'} animName={'b'} cor={"#ff22ff"}/>
      <PlacarFutebol nomeTimeA={"AAAAAAAA"} nomeTimeB={'BBBBBBB'}/>
    </>
  )
}

export default App
