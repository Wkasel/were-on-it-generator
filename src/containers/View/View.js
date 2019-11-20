import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Redirect } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import LogoComponent from '../../components/LogoComponent';

class View extends React.Component {
  constructor() {
    super();
    this.state = {
      textL1: 'Meth.',
      textL2: "We're on it."
    };

    this.captureRef = React.createRef();
  }

  handleChangeL1 = event => {
    this.setState({ textL1: event.target.value });
  };

  handleChangeL2 = event => {
    this.setState({ textL2: event.target.value });
  };

  generateShareLink = () => {
    const { textL1, textL2 } = this.state;
    const tmpl = `/share?l1=${encodeURI(textL1)}&l2=${encodeURI(textL2)}`;

    this.setState({ redirect: tmpl });
  };

  render() {
    const { textL1, textL2, redirect, themeInvert } = this.state;
    if (redirect) {
      return <Redirect to={redirect} />;
    }
    return (
      <>
        <Container>
          <Form>
            <Form.Group controlId="formBasicLine1">
              <Form.Label>Text Line 1</Form.Label>
              <Form.Control
                type="text"
                placeholder="Meth."
                value={textL1}
                key="create-textL1"
                onChange={this.handleChangeL1}
              />
            </Form.Group>

            <Form.Group controlId="formBasicLine2">
              <Form.Label>Text Line 2</Form.Label>
              <Form.Control
                type="text"
                placeholder="We're on it."
                value={textL2}
                key="create-textL2"
                onChange={this.handleChangeL2}
              />
            </Form.Group>

            <Button
              variant="outline-dark"
              type="submit"
              onClick={this.generateShareLink}
            >
              Share this link with friends!
            </Button>
          </Form>
          <br />
        </Container>
        <br />
        <div ref={this.captureRef}>
          <LogoComponent
            textL1={textL1}
            textL2={textL2}
            themeName={themeInvert ? 'dark' : 'inverse'}
          />
        </div>
      </>
    );
  }
}

export { View };

// Fix bugs and come back to it later
// handleThemeChange = event => {
//   this.setState({ themeInvert: event.target.checked });
//   console.log(this.state);
// };
// const Checkbox = props => (
// <Form.Check type="checkbox" label="Invert Colors" {...props} />
// );
// <Form.Group controlId="formBasicCheckbox">
//   <Checkbox
//     checked={this.state.themeInvert}
//     onChange={this.handleThemeChange}
//   />
// </Form.Group>
