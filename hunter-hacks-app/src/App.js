// import './App.css';
// import Header from './components/header';
// import Mapping from './components/map';
// import About from './components/about';
// import Result from './components/results';
// import stationData from "./stations_data.json";
// import stationNames from "./station_names.json";


// function App() {

//   const handleSearch = () =>{}
//   const handleSearch2 = () =>{}

//   return (
//       <div className="App">
//        <Header />

//         <section id="map">
//           <Mapping />
//         </section>

//         <div className="searching">
//           {/* <form onSubmit={handleSearch} className="Search bar">
//             <input type="text" placeholder="Search Stations" className="searchArea"></input>
//           <form onSubmit={handleSearch2} className="Search bar">
//             <input type="text" placeholder="Search Line" className="searchArea"></input>
//             <button type="submit" className="search-button">
//               GO
//           </button>
//           </form>
//           </form> */}

//           <SearchSection
//   input1={input1} setInput1={setInput1}
//   input2={input2} setInput2={setInput2}
//   onSearch={handleSearch}
//   options={stationNames}
// />
//         </div>

//         < Result />
//         <Result />
//         <Result/>


//         <section id="about">
//           <About />
//         </section>

//       </div>
    
//   );
// }

// export default App;

import './App.css';
import { useState } from 'react';
import Header from './components/header';
import Mapping from './components/map';
import About from './components/about';
import ResultsSection from './components/results';
import SearchSection from './components/navBar';
import stationData from "./stations_data.json";
import stationNames from "./station_names.json";

function App() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [results, setResults] = useState([]);

  function handleSearch() {
    setResults([input1, input2]);
  }

  return (
    <div className="App">
      <Header />

      <section id="map">
        <Mapping />
      </section>

      <div className="searching">
        <SearchSection
          input1={input1} setInput1={setInput1}
          input2={input2} setInput2={setInput2}
          onSearch={handleSearch}
          options={stationNames}
        />
      </div>

      <ResultsSection
        results={results}
        stationData={stationData}
      />

      <section id="about">
        <About />
      </section>
    </div>
  );
}

export default App;