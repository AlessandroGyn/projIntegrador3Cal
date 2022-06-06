import './index.css';
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import Servicos from './components/pages/Servicos'
import Agendamento from './components/pages/Agendamento'
import Midia from './components/pages/Midia'
import QuemSomos from './components/pages/QuemSomos'
import Contato from './components/pages/Contato'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

function App() {
  return (
    <Router>
      <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicos" element={<Servicos />} />
            <Route path="/agendamento" element={<Agendamento />} />
            <Route path="/midia" element={<Midia />} />
            <Route path="/QuemSomos" element={<QuemSomos />} />
            <Route path="/contato" element={<Contato />} />
        </Routes>
      <Footer />
    </Router>
  )
}

export default App;