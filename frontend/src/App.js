import React from 'react';
import { Container } from 'react-bootstrap';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import {HomeScreen,LoginScreen,ProductScreen} from './screens'
import {Footer,NavHeader} from './components'
function App() {
  return (
    <Router>
       <NavHeader/>
      <main className="py-3">
        <Container>
  <Route path='/' component={HomeScreen} exact/>
  <Route path='/product/:id' component={ProductScreen}/>
 <Route path = '/login' component={LoginScreen}/>
  </Container>
  </main>
  <Footer/>
  
    </Router>
  );
}

export default App;
