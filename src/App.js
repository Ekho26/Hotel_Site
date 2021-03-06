import React from 'react';
import './App.css';

// Router
import {Route, Switch} from 'react-router-dom';

// Pages
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import Error from './pages/Error';
import SingleRoom from './pages/SingleRoom';

// Navbar
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms/" component={Rooms} />
        <Route exact path="/rooms/:variable" component={SingleRoom} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
