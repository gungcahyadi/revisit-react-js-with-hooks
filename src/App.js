import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { is_dark: false }; //it called state
  }

  render() {
    const { is_dark } = this.state; //you can call the state like this

    return (<div>
      <h2>Hello world!</h2>
      <button>Turn {is_dark ? "on" : "off"} the light</button>
    </div>)
  }
}

export default App;
