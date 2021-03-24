import React, { Component } from 'react';

class ReadArticle extends Component{
    render(){
        return (
            <div>
                title : {this.props.title}
                desc : {this.props.desc}
            </div>
        );
    }
}

export default ReadArticle;