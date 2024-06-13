import { ThemeProvider } from './ThemeContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import About from './About';
import Home from './Home';
import './App.css'

function App() {

  return (
    <Router>
      <ThemeProvider>
        <div className="App">
          <Navbar/>
          <Routes>
            <Route path="/Home" exact element={<Home/>} />
            <Route path="/About" element={<About/>} />
          </Routes>
        </div>
      </ThemeProvider>
    </Router>
  )
}

export default App
