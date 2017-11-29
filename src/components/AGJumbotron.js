import React, { Component } from 'react';
import { Jumbotron, Button, Modal } from 'react-bootstrap';
import AGPlanets from './AGPlanets'

class AGJumbotron extends Component {
    constructor(props){
        super(props);
        this.state = {
          show: false
        };
    }

    getInitialState() {
          return { show: false };
    }

    render() {
        let close = () => this.setState({ show: false });
        return(
            <Jumbotron className="AGJumbotron">
                <h1 className="title"><span className="agent">Agent</span> <span className="galaxy">Galaxy</span></h1>
                <p>The best real estate agent for planets.</p>
                <div className="modal-container">
                    <Button
                    className="jumbtron-button"
                    bsStyle="danger"
                    bsSize="large"
                    onClick={() => this.setState({ show: true })}
                    >
                    Buy Now
                    </Button>

                    <Modal
                    show={this.state.show}
                    onHide={close}
                    container={this}
                    aria-labelledby="contained-modal-title"
                    >
                    <Modal.Header closeButton>
                        <Modal.Title className="contained-modal-title" id="contained-modal-title">I want to move to ...</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <AGPlanets></AGPlanets>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={close}>Close</Button>
                    </Modal.Footer>
                    </Modal>
                </div>
            </Jumbotron>
      )
  }
}

export default AGJumbotron;