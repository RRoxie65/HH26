function ZoomButton({ iframeRef }) {
   const zoomToPoint = (lat, lng) => {
      if (iframeRef.current) {
         try {
            iframeRef.current.contentWindow.postMessage(
               {
                  action: "zoomToPoint",
                  lat,
                  lng,
                  zoom: 15,
               },
               "*"
            );
         } catch (error) {
            console.error(error);
         }
      }
   };

   return (
      <button onClick={() => zoomToPoint(40.6042, -73.755)}>
         Zoom to Rockaway
      </button>
   );
}

export default ZoomButton;
