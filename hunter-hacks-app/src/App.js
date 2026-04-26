import "./App.css";
import Map from "./Map";
import ZoomButton from "./ZoomButton";
import { useRef } from "react";

function App() {
   const iframeRef = useRef(null);

   return (
      <div className='App'>
         <h1>Hunter Hacks!</h1>
         <Map ref={iframeRef} />
         <ZoomButton iframeRef={iframeRef} />
      </div>
   );
}

export default App;
