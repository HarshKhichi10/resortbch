import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import Singleroom from './pages/Singleroom';
import Errors from './pages/Errors';
import NavBar from './components/NavBar';
import './App.css';

function App() {
  return (
    <>
    <NavBar/>
  

<Switch>

   <Route exact path='/' component={Home}/>
   <Route exact path='/rooms' component={Rooms}/>
   <Route exact path='/rooms/:slug' component={Singleroom}/>
   <Route component={Errors}/>
    </Switch>
    </>
      
  );
}

export default App;
