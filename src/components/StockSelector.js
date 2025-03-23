import React from 'react';

function StockSelector({ timePeriod, setTimePeriod }) {
  const handleTimeChange = (event) => {
    setTimePeriod(event.target.value);
  };

  return (
    <div style={{ marginBottom: '24px' }}>
      <label htmlFor="time-period">Time Period: </label>
      <select id="time-period" value={timePeriod} onChange={handleTimeChange}>
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
      </select>
    </div>
  );
}

export default StockSelector;