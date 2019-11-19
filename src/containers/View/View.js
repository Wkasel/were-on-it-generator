import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import LogoComponent from './LogoComponent';

class View extends React.Component {
  constructor() {
    super();
    this.state = {
      textL1: 'Meth.',
      textL2: "We're on it."
    };
    this.handleChangeL1 = this.handleChangeL1.bind(this);
    this.handleChangeL2 = this.handleChangeL2.bind(this);
  }

  handleChangeL1(event) {
    this.setState({ textL1: event.target.value });
  }

  handleChangeL2(event) {
    this.setState({ textL2: event.target.value });
  }

  render() {
    const { textL1, textL2 } = this.state;
    return (
      <>
        <Form>
          <Form.Group controlId="formBasicLine1">
            <Form.Label>Text Line 1</Form.Label>
            <Form.Control
              type="text"
              placeholder="Meth."
              value={textL1}
              onChange={this.handleChangeL1}
            />
          </Form.Group>

          <Form.Group controlId="formBasicLine2">
            <Form.Label>Text Line 2</Form.Label>
            <Form.Control
              type="text"
              placeholder="We're on it."
              value={textL2}
              onChange={this.handleChangeL2}
            />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Invert Colors" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <br />
        <LogoComponent textL1={textL1} textL2={textL2} />
      </>
    );
  }
}

export { View };
