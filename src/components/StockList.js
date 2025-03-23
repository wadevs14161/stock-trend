import React from 'react';

function StockList({ stocks, timePeriod }) {
  return (
    <div style={{ marginBottom: '24px' }}>
      <h2>Top 5 Stocks ({timePeriod.charAt(0).toUpperCase() + timePeriod.slice(1)})</h2>
      <ul>
        {stocks.map((stock, index) => (
          <li key={index}>{stock.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default StockList;