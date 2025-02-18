// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Home from './Pages/home'; // Import the Home component
import PageTitle from './pagetitle';
import Gibson from './Pages/projects/gibson';
import About from './Pages/about';
import Future from './Pages/projects/future';

function App() {

  return (
      <Router>
        <Routes>
          <Route path="/" element={<><PageTitle title="" /><Home /></>} />

          <Route path="/gibson" element={<><PageTitle title="" /><Gibson /></>} />
          <Route path="/about" element={<><PageTitle title="" /><About /></>} />
          <Route path="/Future" element={<><PageTitle title="" /><Future /></>} />


          <Route path="*" element={<><PageTitle title="404 Not Found" /><Navigate to="/" /></>} />

          </Routes>
      </Router>
   
  );
}

export default App;
