import React from 'react'
import './App.css';
import Toc from './components/Toc'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      toc:{title:"Hello", desc:"World"}
    }
  }

  render() {
    return (
      <div className="App">
        <Toc title={this.state.toc.title} desc={this.state.toc.desc}></Toc>
      </div>
    );
  }
}

export default App;
