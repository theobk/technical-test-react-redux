import React from 'react';
import { Articles } from './features/articles/Articles'
import './App.css';
import NavBar from './features/navbar/NavBar'

function App() {
  return (
    <div className="App">
        <NavBar />
        <Articles />
    </div>
  );
}

export default App;
