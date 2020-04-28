import React from 'react';
import AppBar from './components/AppBar';
import './App.css';
import AppRouter from './router/AppRouter';
import { GlobalContextProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalContextProvider>
      <div className="App">
        <AppBar />
        <AppRouter />
      </div>
    </GlobalContextProvider>
  );
}

export default App;
