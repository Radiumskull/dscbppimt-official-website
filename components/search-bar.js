import React from 'react';
import './App.css';
import ComplexGrid from './part1';

const App = () => {
  return (
    <>
    <div className="App">
      <h1> LeaderBoard</h1>
      <form class="example" action="/action_page.php">
      <input type="text" placeholder="Search.." name="search"/>
      </form>
    </div>
    <br/>
      <ComplexGrid/>
    </>
  );
}

export default App;