import Home from './pages/Home'
import Job from './pages/Jobs'
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom'
import MYState from './context/MYState'

function App() {
  
  return (
    
      <MYState>
        <Router>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/jobs' element={<Job />}/>
          </Routes>
        </Router>
      </MYState>
    
  )
}

export default App
