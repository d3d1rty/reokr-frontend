import React, { Suspense } from 'react';
import './App.scss';
import { Routes } from './routes';
import { BrowserRouter as Router } from "react-router-dom";
import Footer from './layout/Footer';

function App() {
  return (
    <Suspense fallback={null}>
      <div className="App">
        <Router>
          <Routes />
          <Footer />
        </Router>
      </div>
    </Suspense>
  );
}

export default App;
