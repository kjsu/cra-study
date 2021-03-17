import React from 'react'
import './App.css';
import Toc from './components/Toc'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      subject:{title:"Web", sub:"World Wide Web!"},
      contents:[
        {id:1, title:"Html", desc:"Html is ..."},
        {id:2, title:"CSS", desc:"CSS is ..."},
        {id:3, title:"JavaScript", desc:"JS is ..."},
      ]
    }
  }

  render() {
    return (
      <div className="App">
        {/* <Subject
          title = {this.state.subject.title}
          sub = {this.state.subject.sub}>
        </Subject> */}
        <Toc data={this.state.contents}></Toc>
        {/* <Content title="Html" desc="Html is ..."></Content> */}
      </div>
    );
  }
}

export default App;
