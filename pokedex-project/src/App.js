import './App.css';
import MainPage from './Pages/MainPage/MainPage'
import Provider from './Provider/Provider';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SearchPage from './Pages/SearchPage/SearchPage';

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<MainPage />}  />
          <Route exact path='/search' element={ <SearchPage /> } />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
