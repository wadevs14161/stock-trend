import React from 'react';

function DownloadButton({ data, timePeriod }) {
  const handleDownload = () => {
    const dataStr = JSON.stringify(data, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${timePeriod}_stock_data.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <button onClick={handleDownload} style={{ padding: '10px 20px', fontSize: '16px' }}>
      Download Data
    </button>
  );
}

export default DownloadButton;