import React from "react";
import "./App.css";
import SearchBar from './Components/SearchBar';
import Card from './Components/Card'

function App() {
  return (
    <div className="App">
      <SearchBar placeholder="Enter a Students Admission number..."  />
    </div>
  );
}


function App() {
  const [ name ] = useState('Name');
  const [ stream ] = useState('stream');
  const [ house ] = useState ('house');
  return (
    <div className="App">
      <Card name={name} stream={stream} house={house}/>
    </div>
  );
}


export default App;
