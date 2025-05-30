import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Routing import
import Login from './components/Authentication/LoginForm';
import Header from "./components/Layout/Header";
// import Footer from "./components/Layout/Footer";
import PageNotFound from './pages/PageNotFound';
import Contact from './pages/Contact';
import Hero from './components/Home/Hero';


function App() {
  const [count, setCount] = useState(0)

  return (
      <Router>
      <Routes>
        <Route path="/" element={<Hero/>} />
        <Route path="/SignUp" element={<Login />} /> 
        {/* <Route path="/Register" element={<Register />} />  */}
        {/* <Route path="/AboutUs" element={<AboutUs />} /> 
        <Route path="/Update" element={<Update />} />  */}
        <Route path="*" element={<PageNotFound />} />  
         <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App




