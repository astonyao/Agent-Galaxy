import React, { Component } from 'react';
import { Media, Grid } from 'react-bootstrap';
import time from './img/media/time.png'
import nytimes from './img/media/nytimes.jpg'
import buzzfeed from './img/media/buzzfeed.png'

class AGMedia extends Component {
    render() {        
        return(
            <div className="AGMedia">
                <h2>Social Media</h2>
                <Grid className="MediaContainer">
                {/* Media one */}
                <Media>
                    <Media.Left>
                        <img width={64} height={64} src={ time } alt="time" />
                    </Media.Left>
                    <Media.Body>
                        <Media.Heading>TIME</Media.Heading>
                        <p>Great Service, friendly, and responds in a very timely manner. We are very happy to set our new office on Mercury and the service we recieved during our purchase at Agent Galaxy</p>
                    </Media.Body>
                </Media>
                {/* Media two */}
                <Media>
                    <Media.Left>
                        <img width={64} height={64} src={ nytimes } alt="nytime" />
                    </Media.Left>
                    <Media.Body>
                        <Media.Heading>New York Times</Media.Heading>
                        <p>Molly made the experience of selling our planet as unstressful as possible. Her marketing plan, communication with regards to planet open feedback and quick follow up with buyers was outstanding. </p>
                    </Media.Body>
                </Media>
                {/* Media three */}
                <Media>
                    <Media.Left>
                        <img width={64} height={64} src={ buzzfeed } alt="buzzfeed" />
                    </Media.Left>
                    <Media.Body>
                        <Media.Heading>BuzzFeed</Media.Heading>
                        <p>From the first meeting at the Agent Galaxy to the day of settlement, Elliot was professional. He was incredibly helpful and nothing was too much trouble for him. Everything went smoothly and we are very happy.</p>
                    </Media.Body>
                </Media>
                </Grid>
            </div>
      )
  }
}

export default AGMedia;