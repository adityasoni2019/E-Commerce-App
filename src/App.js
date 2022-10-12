import React from 'react' 
import './App.css';

import HomePage from './pages/homepage/homepage.component';

import {Switch, Route} from 'react-router-dom';

const HatsPage = () =>(
  <div>
  <h1>HATS PAGE</h1>
  </div>
)

function App() {
  return (
    <div className="App">
      {/* <Route path = '/' component= {HomePage}/> */}
      {/* <Route path = '/hats' component= {HatsPage}/> */}
      {/* <Route path="/user" component={HomePage}/> */}
      <HomePage/>
    </div>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <HomePage/>
//     </div>
//   );
// }

export default App;
