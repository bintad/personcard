import React from 'react';
import Props from './components/props';
import './App.css';

function App() {
  return (
    <div className="App">
      <Props 
        firstName="Doe"
        lastName="Jane"
        age={45} 
        hairColor=  "Black"
      
      />
      <Props 
        firstName="Smith"
        lastName="John"
        age={88} 
        hairColor="Brown"
      
      />
      <Props 
        firstName="Fillmore"
        lastName="Millard"
        age={50} 
        hairColor="Brown"
      
      />
      <Props 
        firstName="Smith"
        lastName="Maria"
        age={62} 
        hairColor="Brown"
      
      />
     
     
     
    </div>
  );
}

export default App;
