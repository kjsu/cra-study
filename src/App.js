import React, { Component } from 'react'
import Subject from './components/Subject'
import Control from './components/Control'
import Toc from './components/Toc'
import ReadContent from './components/ReadContent'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      mode:'welcome',
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
    var _title, _desc = null;

    if (this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
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
        <ReadContent title={_title} desc={_desc}></ReadContent>
      </div>
    );
  }
}

export default App;
