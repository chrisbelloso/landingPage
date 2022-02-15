import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import MainView from './views/MainView';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={ <MainView /> } />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
