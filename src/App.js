import React, { Component } from 'react'
import './App.css';
import Subject from './components/Subject'
import Toc from './components/Toc'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      mode:'reading',
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
    var _title, _desc;

    if (this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if (this.state.mode === 'reading'){
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }

    return (
      <div className="App">
        <header>
            <h1><a href="/" onClick={function(e){
              this.setState({
                mode : 'welcome'
              });
              e.preventDefault();
            }.bind(this)}>{_title}</a></h1>
            {_desc}
        </header>
        {/* <Subject
          title = {_title}
          sub = {_desc}>
        </Subject> */}
        <Toc data={this.state.contents}></Toc>
        {/* <Content title="Html" desc="Html is ..."></Content> */}
      </div>
    );
  }
}

export default App;
