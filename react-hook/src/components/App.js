import React from 'react';
import '../App.css';
import header from './Header';

function App() {
  const DEFAULT_PLACEHOLDER_IMAGE =
  "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";
  const test1= () =>{
    console.log(DEFAULT_PLACEHOLDER_IMAGE.title)
  }
  return (
    <div className="App">
      <header/>
      <button onClick={test1}>click me</button>        
    </div>
  );
}



export default App;
