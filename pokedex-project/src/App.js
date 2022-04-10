import './App.css';
import MainPage from './Pages/MainPage/MainPage'
import Provider from './Provider/Provider';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SearchPage from './Pages/SearchPage/SearchPage';
import PokémonDetail from './Pages/PokémonDetail/PokémonDetail';
import Favorites from './Pages/Favorites/Favorites';
import BattlePage from './Pages/BattlePage/BattlePage';

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<MainPage />}  />
          <Route exact path='/search' element={ <SearchPage /> } />
          <Route exact path='/pokemon/:id' element={ <PokémonDetail /> } />
          <Route exact path='/favorites' element={ <Favorites /> } />
          <Route exact path='/battle' element={ <BattlePage /> } />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
