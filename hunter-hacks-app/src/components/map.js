function Mapping({ iframeRef }) {
   return (
      <iframe
         ref={iframeRef}
         title='map'
         src='/fare_evasion_map.html'
         style={{ width: "100%", height: "80vh", border: "none" }}
      />
   );
}

export default Mapping;
