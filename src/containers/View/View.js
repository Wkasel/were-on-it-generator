import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import html2canvas from 'html2canvas';
import LogoComponent from './LogoComponent';

class View extends React.Component {
  constructor() {
    super();
    this.state = {
      textL1: 'Meth.',
      textL2: "We're on it."
    };

    this.captureRef = React.createRef();
    this.displayRef = React.createRef();
  }

  handleChangeL1 = event => {
    this.setState({ textL1: event.target.value });
  };

  handleChangeL2 = event => {
    this.setState({ textL2: event.target.value });
  };

  saveAs = (uri, filename) => {
    const link = document.createElement('a');
    if (typeof link.download === 'string') {
      link.href = uri;
      link.download = filename;

      // Firefox requires the link to be in the body
      document.body.appendChild(link);

      // simulate click
      link.click();

      // remove the link when done
      document.body.removeChild(link);
    } else {
      window.open(uri);
    }
  };

  getScreenshotHandler = () => {
    html2canvas(this.captureRef.current).then(
      canvas =>
        this.saveAs(
          canvas
            .toDataURL('image/jpeg')
            .replace('image/jpeg', 'image/octet-stream'),
          'were-on-it-generator.jpg'
        )
      // console.log(canvas)
    );
  };

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
        <Button onClick={this.getScreenshotHandler}>Get Screenshot!</Button>
        <br />
        <div ref={this.captureRef}>
          <LogoComponent textL1={textL1} textL2={textL2} />
        </div>
        <div ref={this.displayRef} />
      </>
    );
  }
}

export { View };
