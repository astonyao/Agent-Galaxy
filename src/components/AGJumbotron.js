import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

class AGJumbotron extends Component {
    render() {        
        return(
            <Jumbotron className="AGJumbotron">
                <h1>Agent Galaxy</h1>
                <p>The best real estate agent in solar system.</p>
                <p><Button bsStyle="primary">Learn more</Button></p>
            </Jumbotron>
      )
  }
}

export default AGJumbotron;