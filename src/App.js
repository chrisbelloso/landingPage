import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import AboutPage from './views/AboutPage';
import MainView from './views/MainView';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={ <MainView /> } />
      <Route path="/about" element={ <AboutPage /> } />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
