import { useState } from 'react';

export default function ReportFilter({ onFilterChange }) {
  const [selectedNiche, setSelectedNiche] = useState('');

  const handleNicheChange = (e) => {
    const niche = e.target.value;
    setSelectedNiche(niche);
    onFilterChange(niche);
  };

  return (
    <div>
      <select value={selectedNiche} onChange={handleNicheChange}>
        <option value="">All Niches</option>
        <option value="boardgames">Boardgames</option>
        <option value="test">Test</option>
      </select>
    </div>
  );
}
