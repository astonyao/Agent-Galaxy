import React, { Component } from 'react';
import { Thumbnail, Button } from 'react-bootstrap';

class AGMember extends Component {
    constructor(props){
        super(props);
        this.state = {
          src: this.props.imgSrc,
          name: this.props.memberName,
          info: this.props.description
        };
    }

    render() {        
        return(
            <div className="AGMember">
                <Thumbnail src={ this.state.src }>
                <h3>{ this.state.name }</h3>
                <p>{ this.state.info }</p>
                </Thumbnail>
            </div>
      )
  }
}

export default AGMember;