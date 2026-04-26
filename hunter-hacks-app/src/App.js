import "./App.css";
import { useRef } from "react";
import Header from "./header";
import Mapping from "./map";
import About from "./about";
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
