import React, { Suspense } from 'react';
import './App.scss';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';

function App() {
  return (
    <Suspense fallback={null}>
      <div className="App">
        <Navbar />
        <Footer />
      </div>
    </Suspense>
  );
}

export default App;
