import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import AGPlanet from './AGPlanet.js'
import jupiter from './img/planets/Joe-Van-Wetering-2-Jupiter.jpg'
import Joe_Van_Wetering from './img/planets/Joe-Van-Wetering.jpg'
import Saturn_Jupiter1 from './img/planets/Saturn_Jupiter1.jpg'

class AGPlanets extends Component {
    render() {        
        return(
            <div className="AGPlanets">
                <Grid>
                    <Row>
                    <Col className="PlanetForSale" xs={12} sm={4}>
                        <AGPlanet imgSrc={ jupiter} planetName="Jupiter" people={ 1 }></AGPlanet>
                    </Col>
                    <Col className="PlanetForSale" xs={12} sm={4}>
                        <AGPlanet imgSrc={ Joe_Van_Wetering} planetName="M89" people={ 50 }></AGPlanet>
                    </Col>
                    <Col className="PlanetForSale" xs={12} sm={4}>
                        <AGPlanet imgSrc={ Saturn_Jupiter1} planetName="Saturn" people={ 4 }></AGPlanet>
                    </Col>
                    </Row>
                </Grid>
            </div>
      )
  }
}

export default AGPlanets;