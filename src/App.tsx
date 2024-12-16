import React from 'react';
import Header from './components/Header';
import EventDetails from './components/EventDetails';
import Programme from './components/Programme';
import ImportantNote from './components/ImportantNote';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <EventDetails />
      <Programme />
      <ImportantNote />
      <Footer />
    </div>
  );
}

export default App;