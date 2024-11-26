import React from 'react';
import { Outlet } from 'react-router-dom';
import JobBoard from './components/JobBoard';

function App() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default App;
