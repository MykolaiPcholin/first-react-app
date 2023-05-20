import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Pages/Home/Home';
import Shorts from './components/Pages/Shorts/Shorts';
import Shirts from './components/Pages/Shirts/Shirts';
import Pants from './components/Pages/Pants/Pants';
import Bag from './components/Pages/Bag/Bag';

function App() {
  
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/first-react-app/bag' element={<Bag />} />
        <Route path='/first-react-app/shirts' element={<Shirts />} />
        <Route path='/first-react-app/pants' element={<Pants />} />
        <Route path='/first-react-app/shorts' element={<Shorts />} />
        <Route path='/first-react-app/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
