import React, { useState } from 'react';
import StockSelector from '../components/StockSelector';
import StockList from '../components/StockList';
import StockChart from '../components/StockChart';
import DownloadButton from '../components/DownloadButton';

function StockPrediction() {
  // Mock data (replace with your algorithm's output)
  const mockStockData = {
    daily: [
      { name: 'AAPL', prediction: [150, 152, 153, 155, 154, 156, 158, 160, 159, 161] },
      { name: 'GOOGL', prediction: [2800, 2810, 2820, 2830, 2840, 2850, 2860, 2870, 2880, 2890] },
      { name: 'MSFT', prediction: [300, 302, 304, 306, 308, 310, 312, 314, 316, 318] },
      { name: 'TSLA', prediction: [700, 710, 720, 730, 740, 750, 760, 770, 780, 790] },
      { name: 'AMZN', prediction: [3300, 3310, 3320, 3330, 3340, 3350, 3360, 3370, 3380, 3390] },
    ],
    weekly: [], // Add similar data
    monthly: [], // Add similar data
  };

  const [timePeriod, setTimePeriod] = useState('daily');

  return (
    <div>
      <h1>Stock Prediction Tool</h1>
      <StockSelector timePeriod={timePeriod} setTimePeriod={setTimePeriod} />
      <StockList stocks={mockStockData[timePeriod]} timePeriod={timePeriod} />
      <StockChart stocks={mockStockData[timePeriod]} />
      <DownloadButton data={mockStockData[timePeriod]} timePeriod={timePeriod} />
    </div>
  );
}

export default StockPrediction;