import React from 'react';
import html2canvas from 'html2canvas';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Twitter, Facebook, Mail, Reddit } from 'react-social-sharing';
import LogoComponent from '../../components/LogoComponent';

class Share extends React.Component {
  constructor() {
    super();
    const url = new URL(window.location.href);
    this.getL1 = () =>
      url.searchParams.get('l1') === '' ? 'Meth.' : url.searchParams.get('l1');
    this.getL2 = () =>
      url.searchParams.get('l2') === ''
        ? `We're on it.`
        : url.searchParams.get('l2');
    this.state = {
      l1: this.getL1(),
      l2: this.getL2()
    };
    this.captureRef = React.createRef();
  }

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
    html2canvas(this.captureRef.current).then(canvas =>
      this.saveAs(canvas.toDataURL('image/png'), 'were-on-it-generator.png')
    );
  };

  render() {
    const { l1, l2 } = this.state;
    return (
      <>
        <div className="well">
          <br />
          <p>Share this with friends:</p>
          <Form.Control
            type="text"
            size="lg"
            value={`http://wereonitgenerator.com/share?l1=${encodeURI(
              this.getL1()
            )}&l2=${encodeURI(this.getL2())}`}
            onChange={() => null}
          />
          <br />
          <p>Share your South D. Meme!</p>
          <Twitter link={window.location.href} />
          <Facebook link={window.location.href} />
          <Mail link={window.location.href} />
          <Reddit link={window.location.href} />
          <br />
          <Button variant="outline-dark" onClick={this.getScreenshotHandler}>
            Download this Meme!
          </Button>
          <p>(Experiemental, buggy in some browsers) Download as an image:</p>
          <p>Coming soon: more states!</p>
        </div>
        <div ref={this.captureRef}>
          <LogoComponent textL1={l1} textL2={l2} />
        </div>
      </>
    );
  }
}

export { Share };
