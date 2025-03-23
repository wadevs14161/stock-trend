import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import StockPrediction from './pages/StockPrediction';

function App() {
  return (
    <div style={{ padding: '32px' }}>
      <nav style={{ marginBottom: '24px' }}>
        <Link to="/" style={{ marginRight: '20px' }}>Home</Link>
        <Link to="/stocks">Stock Prediction</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stocks" element={<StockPrediction />} />
      </Routes>
    </div>
  );
}

export default App;