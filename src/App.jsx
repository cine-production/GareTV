import { Routes, Route } from 'react-router-dom'
import React from 'react'
import Home from './pages/Home'
import City from './pages/City'
import TrainStation from './components/TrainStation'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="//TVgare" element={<Home />} />
        <Route path="//TVgare/:city" element={<City />}>
          <Route path=":codeStation" element={<TrainStation />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
