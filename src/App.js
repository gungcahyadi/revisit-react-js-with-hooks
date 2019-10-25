import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { is_dark: false }; //it called state
  }

  toogleMode = () => {
    this.setState({ is_dark: !this.state.is_dark });
  }

  render() {
    const { is_dark } = this.state; //you can call the state like this

    // dont forget to create the style
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

    return (<div style={containerStyle}>
      <h2>Hello world!</h2>
      <button style={buttonStyle} onClick={this.toogleMode}>Turn {is_dark ? "on" : "off"} the light</button>
    </div>)
  }
}

export default App;
