import React from 'react'
import './App.css';
import Toc from './Toc'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Toc title="hello" desc="world"></Toc>
      </div>
    );
  }
}

export default App;
