import { Home } from './components/home/Home.page'
import { Draw } from './components/draw/Draw.page'

import { RoutesIndex } from './RoutesIndex'

import './App.style.css'

function App() {
  return (
    <>
      <RoutesIndex path={'/'} element={<Home/>}/>
      <RoutesIndex path={'/draw'} element={<Draw/>}/>
    </>
  )
}

export default App
