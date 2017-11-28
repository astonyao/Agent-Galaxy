import React, { Component } from 'react';
import './AGSky.css';

class AGSky extends Component {
    render() {        
        return(
        <div className="sky">
            <div class="stars"></div>
            {/* <div class="twinkling"></div> */}
            <div class="clouds"></div>
        </div>
      )
  }
}

export default AGSky;