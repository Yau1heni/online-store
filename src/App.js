import './App.css';
import { Header } from './Header';
import { BestSellers } from './BestSellers';
import { Product } from './Product';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="appContainer">
      <Header />
      <Routes>
        <Route path='/' element={<BestSellers />} />
        <Route path=':id' element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
