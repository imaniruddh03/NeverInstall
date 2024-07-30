import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import Homepage from './Pages/Homepage';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen  flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Homepage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
