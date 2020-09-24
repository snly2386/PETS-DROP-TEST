import React from 'react';
import logo from './logo.svg';
import './App.css';
import Landing from './components/Landing'
import Search from './components/Search';
import Details from './components/Details';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Landing />
      <Search />
      <Details />
      <Footer />
    </div>
  );
}

export default App;
