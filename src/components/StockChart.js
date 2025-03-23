import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function StockChart({ stocks }) {
  const chartData = {
    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7', 'Day 8', 'Day 9', 'Day 10'],
    datasets: stocks.map((stock) => ({
      label: stock.name,
      data: stock.prediction,
      borderColor: `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 1)`,
      tension: 0.1,
    })),
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Stock Price Prediction (Next 10 Days)' },
    },
  };

  return (
    <div style={{ marginBottom: '24px' }}>
      <Line data={chartData} options={chartOptions} />
    </div>
  );
}

export default StockChart;