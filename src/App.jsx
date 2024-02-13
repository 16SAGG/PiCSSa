import { Draw } from './components/draw/Draw.page'

import { RoutesIndex } from './RoutesIndex'

import './index.css'

function App() {
  return (
    <>
      <RoutesIndex path={'/'} element={<Draw/>}/>
      <RoutesIndex path={'/draw'} element={<Draw/>}/>
    </>
  )
}

export default App
