import React from 'react';
import LivingRoom from './LivingRoom';
import BedRoom from './BedRoom';

const App = () => {
  const containerStyle = { 
    display: "flex", 
    height: "100vh", 
    alignItems: "center",
    flexDirection: "column",
  };

  return (<div style={containerStyle}>
    <h2>Home Control</h2>

    <LivingRoom />
    <BedRoom />
  </div>)
}

export default App;