import './App.css';

function App() {
  return (
      <div className="App">
        <h1>Hunter Hacks!</h1>
        <iframe
          title="map"
          src="/fare_evasion_map.html"
          style={{ width: '100%', height: '80vh', border: 'none' }}
        />
      </div>
    
  );
}

export default App;
