import React, { Component } from 'react'
import Subject from './components/Subject'
import Control from './components/Control'
import Toc from './components/Toc'
import ReadContent from './components/ReadContent'
import CreateContent from './components/CreateContent'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      mode:'create',
      selected_content_id:2,
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
    var _title, _desc, _article = null;

    if (this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    } else if (this.state.mode === 'read'){
      var i = 0;
      while(i < this.state.contents.length){
        var data = this.state.contents[i];
        if (data.id === this.state.selected_content_id) {
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i = i + 1;
      }
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    } else if (this.state.mode === 'create'){
      _article = <CreateContent title={_title} desc={_desc}></CreateContent>
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
        <Toc onChangePage={function(id){
          this.setState({
            mode : 'read',
            selected_content_id : Number(id)
          })
        }.bind(this)} data={this.state.contents}></Toc>
        <Control onChangeMode={function(mode){
          this.setState({
            mode:mode
          })
        }.bind(this)}></Control>
        {_article}
      </div>
    );
  }
}

export default App;
