import "./App.css";
import { useRef } from "react";
import Header from "./components/header";
import Mapping from "./components/map";
import About from "./components/about";
import SearchFilter from "./SearchFilter";

function App() {
   const iframeRef = useRef(null);

   return (
      <div className='App'>
         <Header />

         <section id='map'>
            <Mapping iframeRef={iframeRef} />
         </section>
         <SearchFilter iframeRef={iframeRef} />

         <section id='about'>
            <About />
         </section>
      </div>
   );
}

export default App;
