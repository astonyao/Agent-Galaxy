import React, { Component } from 'react';
import { Media, Grid } from 'react-bootstrap';

class AGMedia extends Component {
    render() {        
        return(
            <div className="AGMedia">
                <h2>Social Media</h2>
                <Grid className="MediaContainer">
                {/* Media one */}
                <Media>
                    <Media.Left>
                        <img width={64} height={64} src="http://s0.wp.com/wp-content/themes/vip/time2014/img/time-touch_icon_120.png" alt="Image" />
                    </Media.Left>
                    <Media.Body>
                        <Media.Heading>TIME</Media.Heading>
                        <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                    </Media.Body>
                </Media>
                {/* Media two */}
                <Media>
                    <Media.Left>
                        <img width={64} height={64} src="https://pbs.twimg.com/profile_images/905479981459013637/a6BbKh4k_400x400.jpg" alt="Image" />
                    </Media.Left>
                    <Media.Body>
                        <Media.Heading>New York Times</Media.Heading>
                        <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                    </Media.Body>
                </Media>
                </Grid>
            </div>
      )
  }
}

export default AGMedia;