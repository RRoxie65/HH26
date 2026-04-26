import { useState, useEffect } from "react";
import "./navBar.css";

function SearchSection({
   input1,
   setInput1,
   input2,
   setInput2,
   onSearch,
   stationOptions,
   trainOptions,
}) {
   const [filteredStations, setFilteredStations] = useState([]);
   const [filteredTrains, setFilteredTrains] = useState([]);

   // Filter stations
   useEffect(() => {
      if (input1.trim() === "") {
         setFilteredStations([]);
      } else {
         const filtered = stationOptions.filter((name) =>
            name.toLowerCase().includes(input1.toLowerCase())
         );
         setFilteredStations(filtered.slice(0, 8));
      }
   }, [input1, stationOptions]);

   // Filter trains
   useEffect(() => {
      if (input2.trim() === "") {
         setFilteredTrains([]);
      } else {
         const filtered = trainOptions.filter((train) =>
            train.toLowerCase().includes(input2.toLowerCase())
         );
         setFilteredTrains(filtered.slice(0, 8));
      }
   }, [input2, trainOptions]);

   return (
      <div className='search-section'>
         <div className='search-inputs'>
            {/* Station Input */}
            <div className='input-group'>
               <label>Station Name</label>
               <input
                  type='text'
                  placeholder='Search Stations'
                  value={input1}
                  onChange={(e) => setInput1(e.target.value)}
                  className='searchArea'
               />
               {filteredStations.length > 0 && (
                  <ul className='dropdown-list'>
                     {filteredStations.map((station, idx) => (
                        <li key={idx} onClick={() => setInput1(station)}>
                           {station}
                        </li>
                     ))}
                  </ul>
               )}
            </div>

            {/* Train Line Input */}
            <div className='input-group'>
               <label>Train Line</label>
               <input
                  type='text'
                  placeholder='Search Line (A, B, C, etc.)'
                  value={input2}
                  onChange={(e) => setInput2(e.target.value)}
                  className='searchArea'
               />
               {filteredTrains.length > 0 && (
                  <ul className='dropdown-list'>
                     {filteredTrains.map((train, idx) => (
                        <li key={idx} onClick={() => setInput2(train)}>
                           {train}
                        </li>
                     ))}
                  </ul>
               )}
            </div>
         </div>

         <button onClick={onSearch} className='search-button'>
            GO
         </button>
      </div>
   );
}

export default SearchSection;
