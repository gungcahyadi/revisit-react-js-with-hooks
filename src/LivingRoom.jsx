import React, { useState } from 'react';

const LivingRoom = () => {
  const [ isLightOn, setLightStatus ] = useState(false);
  const [ isACOn, setACStatus ] = useState(false);

  const containerStyle = {
    width: "80%", 
    border: "solid 1px #eaeaea", 
    padding: "14px", 
    borderRadius: "6px",
    marginBottom: "12px",
  }

  const titleStyle = {
    marginTop: 0,
  }

  const toogleContainerStyle = {
    display: "flex",
  }

  const toogleStyle = {
    color: "white",
    textAlign: "left",
    padding: "24px",
    margin: "10px",
    borderRadius: 14,
    border: "none",
  }

  const statusStyle = {
    fontSize: "32px",
  }

  function toogleLight() {
    setLightStatus(!isLightOn);
  }

  function toogleAC() {
    setACStatus(!isACOn);
  }

  return (<div style={containerStyle}>
    <h4 style={titleStyle}>Living Room</h4>
    <div style={toogleContainerStyle}>
      <button style={{...toogleStyle, background: isLightOn ? "#1437f8" : "#a3a3a3" }} onClick={toogleLight}>
        <div>Light</div>
        <br/>
        <div style={statusStyle}>{isLightOn ? "ON" : "OFF"}</div>
      </button>

      <button style={{...toogleStyle, background: isACOn ? "#1437f8" : "#a3a3a3" }} onClick={toogleAC}>
        <div>AC</div>
        <br/>
        <div style={statusStyle}>{isACOn ? "ON" : "OFF"}</div>
      </button>
    </div>
  </div>)
}

export default LivingRoom;