import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
// uden den her, så scroller browseren ikke op i toppen af vinduet når man skifter side i React
import ScrollToTop from './ScrollToTop';
import NotFound from './pages/NotFound';
import Nav from './pages/Nav';
import Home from './pages/Home';
import Women from './pages/Women';
import Men from './pages/Men';
import About from './pages/About';
import Accessories from './pages/Accessories';
import Footer from './pages/Footer';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <ScrollToTop /> 
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/home" component={Home} />
          <Route path="/women" component={Women} />
          <Route path="/Men" component={Men} />
          <Route path="/About" component={About} />
          <Route path="/Accessories" component={Accessories} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;