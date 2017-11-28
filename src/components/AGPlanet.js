import React, { Component } from 'react';
import { Thumbnail } from 'react-bootstrap';


class AGPlanet extends Component {
    constructor(props){
        super(props);
        this.state = {
          src: this.props.imgSrc,
          name: this.props.planetName,
          residents: this.props.people
        };
    }

    render() {        
        return(
            <div className="SinglePlanet">
                <Thumbnail alt="171x180" src={ this.state.src } />
                <p className="Name">{ this.state.name }</p>
                <p className="residents">{ this.state.residents }K Residents</p>
            </div>
      )
  }
}

export default AGPlanet;