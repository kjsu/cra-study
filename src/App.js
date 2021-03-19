import React, { Component } from 'react'
import './App.css';
import Subject from './components/Subject'
import Toc from './components/Toc'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      mode:'welcome',
      subject:{title:"Web", sub:"World Wide Web!"},
      welcome:{title:'welcome', desc:'hello react'},
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
        <Subject
          title = {this.state.subject.title}
          sub = {this.state.subject.sub}>
        </Subject>
        <Toc data={this.state.contents}></Toc>
        {/* <Content title="Html" desc="Html is ..."></Content> */}
      </div>
    );
  }
}

export default App;
