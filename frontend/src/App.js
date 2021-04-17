import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import {HomeScreen} from './screens'

function App() {
  return (
    <Router>
   <HomeScreen/>

    </Router>
  );
}

export default App;
