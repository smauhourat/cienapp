//import logo from './logo.png';
import './App.css';
//import Layout from  './components/Layout';
import Home from  './components/Home';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
    </BrowserRouter>

  );
}

export default App;
