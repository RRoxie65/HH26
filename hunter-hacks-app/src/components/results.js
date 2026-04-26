// function Result(){
//     return (
//         <div className = "ResultsFromSearch">
//             <h1>TEXT</h1>
//         </div>
//     );
// }

// export default Result

import DataCard from "./dataCard";

export default function ResultsSection({ results, stationData }) {
  if (!results || results.length === 0) return null;

  return (
    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
      {results.map((stationName, i) => (
        <DataCard key={i} stationName={stationName} stationData={stationData} />
      ))}
    </div>
  );
}