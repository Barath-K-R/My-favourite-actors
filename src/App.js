import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const[people,setPeople]=useState(data);
  return <main>
    <section className="container">
       <h3>My favourite Actors</h3>
        
        <List people={people}/>
        <button id="clear" onClick={()=>{setPeople([])}}>clear all</button>
    </section>
  </main>;
}

export default App;
