import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import AGMember from './AGMember.js'

class AGTeam extends Component {
    render() {        
        return(
            <div className="AGTeam">
                <h2>Meet The Team</h2>
                <Grid>
                    <Row className="show-grid">
                    {/* Member 1 */}
                    <Col xs={6} sm={6} md={4} >
                        <AGMember imgSrc="https://react.semantic-ui.com/assets/images/avatar/large/matthew.png" 
                                memberName="Michael Jordan" 
                                description="Lorem ipsum dolor amet leggings cred street art yr, echo park cray trust fund. Pork belly chia YOLO umami blog air plant, craft beer distillery poutine. Synth migas bespoke coloring book gastropub meh sustainable mumblecore. ">
                        </AGMember>
                    </Col>
                    {/* Member 1 */}
                    <Col xs={6} sm={6} md={4} >
                        <AGMember imgSrc="https://react.semantic-ui.com/assets/images/avatar/large/matthew.png" 
                                memberName="LeBron James" 
                                description="Lorem ipsum dolor amet leggings cred street art yr, echo park cray trust fund. Pork belly chia YOLO umami blog air plant, craft beer distillery poutine. Synth migas bespoke coloring book gastropub meh sustainable mumblecore. ">
                        </AGMember>
                    </Col>
                    {/* Member 3 */}
                    <Col xs={6} sm={6} md={4} >
                        <AGMember imgSrc="https://react.semantic-ui.com/assets/images/avatar/large/matthew.png" 
                                memberName="JJ Redick" 
                                description="Lorem ipsum dolor amet leggings cred street art yr, echo park cray trust fund. Pork belly chia YOLO umami blog air plant, craft beer distillery poutine. Synth migas bespoke coloring book gastropub meh sustainable mumblecore. ">
                        </AGMember>
                    </Col>
                    </Row>
                </Grid>
            </div>
      )
  }
}

export default AGTeam;