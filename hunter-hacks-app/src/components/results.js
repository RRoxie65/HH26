import "./results.css";

function ResultsSection({ results, selectedStation, selectedTrain }) {
   return (
      <div className='results-section'>
         {results.length > 0 && (
            <div>
               <h2>
                  Results for {selectedStation} - Line {selectedTrain}
               </h2>
               {results.map((result, idx) => (
                  <div key={idx} className='result-card'>
                     <div className='result-row'>
                        <span className='result-label'>
                           Fare Evasion Count:
                        </span>
                        <span className='result-value'>
                           {result.Fare_Evasion !== null
                              ? result.Fare_Evasion
                              : "N/A"}
                        </span>
                     </div>
                     <div className='result-row'>
                        <span className='result-label'>
                           Evasion Percentage:
                        </span>
                        <span className='result-value'>
                           {result.Evasion_Percentage !== null
                              ? (result.Evasion_Percentage * 100).toFixed(4) +
                                "%"
                              : "N/A"}
                        </span>
                     </div>
                     <div className='result-row'>
                        <span className='result-label'>Category:</span>
                        <span className='result-value'>
                           {result.comparison_to_rest_of_city || "N/A"}
                        </span>
                     </div>
                  </div>
               ))}
            </div>
         )}
         {results.length === 0 && selectedStation && selectedTrain && (
            <div className='no-results'>
               No data found for {selectedStation} on Line {selectedTrain}
            </div>
         )}
      </div>
   );
}

export default ResultsSection;
