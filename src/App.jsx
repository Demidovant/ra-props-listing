import React from 'react';
import Listing from './components/listing/listing.jsx';
import './App.css'
import '../css/main.css'
import items from '../data/etsy.json';

const App = () => (
  <div>
    <h1>Etsy Listings</h1>
    <Listing items={items} />
  </div>
);

export default App;