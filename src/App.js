import React, { Component } from 'react'
import Subject from './components/Subject'
import Menu from './components/Menu'
import Toc from './components/Toc'
import Content from './components/Content'
import ReadArticle from './components/ReadArticle'

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
    var _title, _desc = null;

    if (this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if (this.state.mode === 'read'){
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }

    return (
      <div className="App">
        <Subject
          title = {this.state.subject.title}
          sub = {this.state.subject.sub}
          onChangePage = {function(_mode){
              this.setState({
                mode : _mode
              });
            }.bind(this)
          }>
        </Subject>
        <Menu></Menu>
        <Toc data={this.state.contents}></Toc>
        <ReadArticle data={this.state.contents}></ReadArticle>
        <Content title={_title} desc={_desc}></Content>
      </div>
    );
  }
}

export default App;
