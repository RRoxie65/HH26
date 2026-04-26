import { useRef, forwardRef } from "react";

const MapComponent = forwardRef((props, ref) => {
   return (
      <iframe
         ref={ref}
         title='map'
         src='/fare_evasion_map.html'
         style={{ width: "100%", height: "80vh", border: "none" }}
      />
   );
});

MapComponent.displayName = "MapComponent";
export default MapComponent;
