// import data from './data';
import './App.css'
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
  return (
    <BrowserRouter>
    <div>
      <header className="App-header">
        <Link to="/">MEZONE</Link>
      </header>
      <main>
        <Routes>
          <Route path='/product/:slug' element={<ProductScreen/>} />
         <Route path="/" element={<HomeScreen />} />
        </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
