import "./App.css";
import Header from "./components/header";
import Mapping from "./components/map";
import About from "./components/about";
import SearchFilter from "./SearchFilter";

function App() {
   const handleSearch = () => {};
   const handleSearch2 = () => {};

   return (
      <div className='App'>
         <Header />

         <section id='map'>
            <Mapping />
         </section>

         {/* <div className="searching">
          <form onSubmit={handleSearch} className="Search bar">
            <input type="text" placeholder="Search Station" className="searchArea"></input>
          <form onSubmit={handleSearch2} className="Search bar">
            <input type="text" placeholder="Search Station" className="searchArea"></input>
            <button type="submit" className="search-button">
              GO
          </button>
          </form>
          </form>
        </div> */}
         <SearchFilter />

         <section id='about'>
            <About />
         </section>
      </div>
   );
}

export default App;
