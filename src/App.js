import React, { useState } from 'react';

const App = () => {
  const [ is_dark, setIsDark ] = useState(false);

  const containerStyle = { 
    display: "flex", 
    height: "100vh", 
    alignItems: "center",
    justifyContent: "center", 
    flexDirection: "column",
    background: is_dark ? "black" : "white",
    color: is_dark ? "white" : "black",
  };

  const buttonStyle = {
    padding: "8px",
    background: "white",
    borderRadius: "8px",
  }

  function toogleMode() {
    setIsDark(!is_dark);
  }

  return (<div style={containerStyle}>
    <h2>Hello world!</h2>
    <button style={buttonStyle} onClick={toogleMode}>Turn {is_dark ? "on" : "off"} the light</button>
  </div>)
}

export default App;