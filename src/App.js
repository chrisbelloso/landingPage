import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import ImportantLinks from './views/ImportantLinks';
import MainView from './views/MainView';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={ <MainView /> } />
      <Route path="/links" element={ <ImportantLinks /> } />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
