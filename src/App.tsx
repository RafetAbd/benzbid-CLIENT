import React from 'react';
import Navbar from './components/Navbar';
import AllRoutes from './AllRoutes';
import './index.css'


const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
    </div>
  );
}

export default App;
