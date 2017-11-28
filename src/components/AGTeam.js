import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import AGMember from './AGMember.js'
import elliot from './img/team/elliot.jpg'
import jenny from './img/team/jenny.jpg'
import molly from './img/team/molly.png'

class AGTeam extends Component {
    render() {        
        return(
            <div className="AGTeam">
                <h2>Meet The Team</h2>
                <Grid>
                    <Row className="show-grid">
                    {/* Member 1 */}
                    <Col xs={12} sm={4} md={4} >
                        <AGMember imgSrc={elliot} 
                                memberName="Elliot Snow" 
                                description="Elliot is our Director and Licensee in Charge in solar system. Elliot has been actively working in the real estate profession since 1987.">
                        </AGMember>
                    </Col>
                    {/* Member 1 */}
                    <Col xs={12} sm={4} md={4} >
                        <AGMember imgSrc={jenny} 
                                memberName="Jenny Targaryen" 
                                description="New to the Agent Galaxy sales team, Jenny brings a highly motivated and passionate attitude. She has sold over 20 properties within solar system.">
                        </AGMember>
                    </Col>
                    {/* Member 3 */}
                    <Col xs={12} sm={4} md={4} >
                        <AGMember imgSrc={molly} 
                                memberName="Molly Lannister" 
                                description="Molly has lived on the moon for over 20 years and been involved in planet property management for 15 years. She is a valued member of the team.">
                        </AGMember>
                    </Col>
                    </Row>
                </Grid>
            </div>
      )
  }
}

export default AGTeam;