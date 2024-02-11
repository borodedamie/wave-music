import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import Enroll from './pages/Enroll';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/enroll-now" element={<Enroll />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;