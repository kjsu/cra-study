import React from 'react';

class Toc extends React.Component {
  render() {
    return (
        <div>
            <h1>{this.props.title}</h1>
            {this.props.desc}
        </div>
    );
  }
}

export default Toc;
