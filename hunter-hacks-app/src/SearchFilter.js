import { useState, useEffect } from "react";
import "./SearchFilter.css";

function SearchFilter({ iframeRef }) {
   const [stationNames, setStationNames] = useState([]);
   const [stationsData, setStationsData] = useState([]);
   const [stationInput, setStationInput] = useState("");
   const [trainInput, setTrainInput] = useState("");
   const [filteredStations, setFilteredStations] = useState([]);
   const [filteredTrains, setFilteredTrains] = useState([]);
   const [selectedStation, setSelectedStation] = useState("");
   const [selectedTrain, setSelectedTrain] = useState("");
   const [searchResults, setSearchResults] = useState([]);
   const [allTrains, setAllTrains] = useState([]);

   // Load data on mount
   useEffect(() => {
      fetch("/station_names.json")
         .then((res) => res.json())
         .then((data) => {
            const unique = [...new Set(data)];
            setStationNames(unique);
         })
         .catch((err) => console.error("Error loading station names:", err));

      fetch("/stations_data.json")
         .then((res) => res.json())
         .then((data) => {
            setStationsData(data);
            const trains = new Set();
            data.forEach((station) => {
               if (station.Daytime_Routes) {
                  station.Daytime_Routes.split(" ").forEach((train) => {
                     trains.add(train);
                  });
               }
            });
            setAllTrains(Array.from(trains).sort());
         })
         .catch((err) => console.error("Error loading stations data:", err));
   }, []);

   // Filter stations as user types
   useEffect(() => {
      if (stationInput.trim() === "") {
         setFilteredStations([]);
         setSelectedStation("");
      } else {
         const filtered = stationNames.filter((name) =>
            name.toLowerCase().includes(stationInput.toLowerCase())
         );
         setFilteredStations(filtered.slice(0, 8));
      }
   }, [stationInput, stationNames]);

   // Filter trains as user types
   useEffect(() => {
      if (trainInput.trim() === "") {
         setFilteredTrains([]);
         setSelectedTrain("");
      } else {
         const filtered = allTrains.filter((train) =>
            train.toLowerCase().includes(trainInput.toLowerCase())
         );
         setFilteredTrains(filtered.slice(0, 8));
      }
   }, [trainInput, allTrains]);

   const handleSelectStation = (station) => {
      setSelectedStation(station);
      setStationInput(station);
      setFilteredStations([]);
   };

   const handleSelectTrain = (train) => {
      setSelectedTrain(train);
      setTrainInput(train);
      setFilteredTrains([]);
   };

   console.log("iframeRef.current:", iframeRef.current);
   const zoomToStation = (lat, lng) => {
      if (iframeRef?.current) {
         iframeRef.current.contentWindow.postMessage(
            { action: "zoomToPoint", lat, lng, zoom: 15 },
            "*"
         );
      }
   };

   const handleSearch = () => {
      if (!selectedStation || !selectedTrain) {
         alert("Please select both a station and a train line");
         return;
      }

      const results = stationsData.filter(
         (station) =>
            station.Stop_Name === selectedStation &&
            station.Daytime_Routes &&
            station.Daytime_Routes.split(" ").includes(selectedTrain)
      );

      setSearchResults(results);

      if (results.length > 0) {
         const lat = results[0].GTFS_Latitude;
         const lng = results[0].GTFS_Longitude;
         zoomToStation(lat, lng);
      }
   };

   return (
      <div className='search-filter-container'>
         <h2>Search Fare Evasion Data</h2>

         <div className='search-inputs'>
            {/* Station Input */}
            <div className='input-group'>
               <label>Station Name</label>
               <input
                  type='text'
                  placeholder='Type station name...'
                  value={stationInput}
                  onChange={(e) => setStationInput(e.target.value)}
                  className='search-input'
               />
               {filteredStations.length > 0 && (
                  <ul className='dropdown-list'>
                     {filteredStations.map((station, idx) => (
                        <li
                           key={idx}
                           onClick={() => handleSelectStation(station)}
                           className='dropdown-item'
                        >
                           {station}
                        </li>
                     ))}
                  </ul>
               )}
               {selectedStation && (
                  <div className='selected-badge'>{selectedStation}</div>
               )}
            </div>

            {/* Train Line Input */}
            <div className='input-group'>
               <label>Train Line</label>
               <input
                  type='text'
                  placeholder='Type train line (A, B, C, etc.)...'
                  value={trainInput}
                  onChange={(e) => setTrainInput(e.target.value)}
                  className='search-input'
               />
               {filteredTrains.length > 0 && (
                  <ul className='dropdown-list'>
                     {filteredTrains.map((train, idx) => (
                        <li
                           key={idx}
                           onClick={() => handleSelectTrain(train)}
                           className='dropdown-item'
                        >
                           {train}
                        </li>
                     ))}
                  </ul>
               )}
               {selectedTrain && (
                  <div className='selected-badge'>{selectedTrain}</div>
               )}
            </div>
         </div>

         <button onClick={handleSearch} className='search-button'>
            Search
         </button>

         {/* Search Results */}
         {searchResults.length > 0 && (
            <div className='results-section'>
               <h3>
                  Results for {selectedStation} - Line {selectedTrain}
               </h3>
               {searchResults.map((result, idx) => (
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
                        <span
                           className={`category-badge ${
                              result.comparison_to_rest_of_city
                                 ?.toLowerCase()
                                 .replace(/ /g, "-") || "n-a"
                           }`}
                        >
                           {result.comparison_to_rest_of_city || "N/A"}
                        </span>
                     </div>
                  </div>
               ))}
            </div>
         )}

         {searchResults.length === 0 && selectedStation && selectedTrain && (
            <div className='no-results'>
               No data found for {selectedStation} on Line {selectedTrain}
            </div>
         )}
      </div>
   );
}

export default SearchFilter;
