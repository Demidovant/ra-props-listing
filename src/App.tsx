import React from 'react';
import Listing from './components/listing/listing';
import './index.css';
import '../css/main.css';
import items from '../data/etsy.json';
import { Item } from './types';

const App: React.FC = () => (
  <div>
    <h1>Etsy Listings</h1>
    <Listing items={items as Item[]} />
  </div>
);

export default App;
