import React, { Component } from 'react';
import { Form, FormControl, Checkbox, Button, FormGroup, Col, ControlLabel} from 'react-bootstrap';


class AGContact extends Component {    
    render() {        
        return(
            <div className="AGContact">
                <h2>Contact Us</h2>
                <Form horizontal>
                    <FormGroup controlId="formHorizontalName">
                        <Col componentClass={ControlLabel} sm={2}>
                            Name
                        </Col>
                        <Col sm={9}>
                            <FormControl type="text" placeholder="John Snow" />
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="formHorizontalEmail">
                        <Col componentClass={ControlLabel} sm={2}>
                            Email
                        </Col>
                        <Col sm={9}>
                            <FormControl type="email" placeholder="Email" />
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="formControlsTextarea">
                        <Col componentClass={ControlLabel} sm={2}>
                            <ControlLabel>Textarea</ControlLabel>
                        </Col>
                        <Col sm={9}>
                            <FormControl componentClass="textarea" placeholder="textarea" />
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col smOffset={2} sm={10}>
                            <Checkbox>Remember me</Checkbox>
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col smOffset={2} sm={10}>
                            <Button type="submit">
                                Send
                            </Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
      )
  }
}

export default AGContact;