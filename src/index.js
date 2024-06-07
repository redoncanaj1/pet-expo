import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

const MainApp = () => {
  const [search,setSearch] = useState("")

  return <>
      <Navbar search={search} setSearch={setSearch} />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/gallery/:id?" element={<Gallery search={search} />} />
    <Route path="/contact" element={<Contact />} />

  </Routes>  
  </>
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <MainApp/>

      <Footer/>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
