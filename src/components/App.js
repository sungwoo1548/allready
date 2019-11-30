import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// components
import Header from './Header';
import SearchBar from './SearchBar';
import Main from './Main'
import Post from './Post'

// Navigation
import Nav from './Nav';


function App() {
  return (
    <BrowserRouter>
      <Nav />
      <SearchBar />
      <Header />

      <Route exact path="/" component={Main} />
      <Post />
    </BrowserRouter>
  );
}

export default App;
