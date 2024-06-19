import Categories from '../Categories/Categories';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Auth from '../Auth/Auth';
import Nav from '../Nav/Nav';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route exact path='/' element={<Nav />} />
        <Route exact path='/categories' element={<Categories />} />
        <Route exact path='/auth' element={<Auth />} />
      </Routes>
    </div>
  );
}

export default App;
