import React, { useState } from 'react';

import { Modal,Button,Form,Col,InputGroup } from 'react-bootstrap';


import { ReactComponent as Logo } from "../src/assets/team/1.png";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import your icons

import { faFacebook } from '@fortawesome/free-brands-svg-icons';

import './App.css';




function FormExample() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      
      
    }

    setValidated(true);
    window.close();
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit} >
      <Form.Row>
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>year of graduate</Form.Label>
          <InputGroup>
            
            <Form.Control
              type="text"
              placeholder="2020"
              aria-describedby="inputGroupPrepend"
              required
            />
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroupPrepend">year</InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" placeholder="City" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>State</Form.Label>
          <Form.Control type="text" placeholder="State" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid state.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label>Zip</Form.Label>
          <Form.Control type="text" placeholder="Zip" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid zip.
          </Form.Control.Feedback>
        </Form.Group>
      </Form.Row>
      <Form.Group>
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
        />
      </Form.Group>
      <Button type="submit">Submit form</Button>
    </Form>
  );
}


function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header >
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <FormExample />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}














function App() {
  const [modalShow, setModalShow] = React.useState(true);

  return (



    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
        <div className="container">

          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu
          <i className="fa fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav text-uppercase ml-auto">
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#services">Faculty Introduction</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#about">Activities Gallery</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#team">Programme Offer</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>


      <header className="masthead">
        <div className="container">
          <div className="intro-text">
            <div className="intro-heading text-uppercase">It's Nice To Meet You</div>
            <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">Tell Me More</a>
          </div>
        </div>
      </header>


      <section className="page-section" id="services">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Faculty Introduction</h2>
              <h3 className="section-subheading text-muted">Begin</h3>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i className="fa fa-circle fa-stack-2x text-primary"></i>
                <i className="fa fa-shopping-cart fa-stack-1x fa-inverse"></i>
              </span>
              <h4 className="service-heading">Introduction</h4>
              <p className="text-muted">The faculty of Engineering and Information Technology (FEIT) is a faculty within the Southern University College (Southern UC). It was established on August 12, 2012 after Southern College (SC) was upgraded to Southern UC. The history reaches back to two decades ago, when the Department of Computer Science was first established in 1991, followed by the Department of Electrical and Electronics Engineering in 2004. These two departments were then integrated and renamed as the School of Engineering and Information Technology (SEIT) in March 2006.



 </p>
            </div>
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i className="fa fa-circle fa-stack-2x text-primary"></i>
                <i className="fa fa-shopping-cart fa-stack-1x fa-inverse"></i>
              </span>
              <h4 className="service-heading">Experienced</h4>
              <p className="text-muted"> With experienced and highly qualified teaching staff and state of the art facilities in the faculty, the diplomas and degree programs offered are accredited by the Malaysian Qualifications Agency (MQA) or recognized by the Engineering Accreditation Council Malaysia (EAC)</p>
            </div>
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i className="fa fa-circle fa-stack-2x text-primary"></i>
                <i className="fa fa-map fa-stack-1x fa-inverse"></i>
              </span>
              <h4 className="service-heading">Staff</h4>
              <p className="text-muted">Nestled in the intricate beauty of lush greeneries and foliage, the faculty is on the second floor of Southern UC’s main building. Currently, the faculty has 40% of the teaching staff who are Ph.D holders specializing in different fields of studies. </p>
            </div>
          </div>
        </div>
      </section>


      {/* <Button variant="primary" onClick={() => setModalShow(true)} >
        Launch vertically centered modal
      </Button> */}

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />


      <section className="page-section" id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Activities Gallery</h2>
              <h3 className="section-subheading text-muted">Works as a Team</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <ul className="timeline">
                <li>
                  <div className="timeline-image">
                    <img className="rounded-circle img-fluid" src={require('../src/assets/team/001.jpg')} alt="" />
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>Staff photo</h4>
                      <h4 className="subheading"> Ph.D holders</h4>
                    </div>
                    <div className="timeline-body">
                      <p className="text-muted"> Currently, the faculty has 40% of the teaching staff who are Ph.D holders specializing in different fields of studies.</p>
                    </div>
                  </div>
                </li>
                <li className="timeline-inverted">
                  <div className="timeline-image">
                    <img className="rounded-circle img-fluid" src={require('../src/assets/team/002.jpg')} alt="" />
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>Outdoor gathering</h4>
                      <h4 className="subheading">Friendly Staff</h4>
                    </div>
                    <div className="timeline-body">
                      <p className="text-muted">The staff and lecturer are friendly and helpful, and the surroundings are very pleasant </p>
                    </div>
                  </div>
                </li>

              </ul>
            </div>
          </div>
        </div>
      </section>


      <section className="bg-light page-section" id="team">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Programme Offer</h2>
              <h3 className="section-subheading text-muted">The Main Three Type Programme</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <div className="team-member">
                <img className="mx-auto rounded-circle" src={require('../src/assets/team/softwareEngineering.png')} alt="" />
                <h4>Bachelor of Software Engineering (Hons)</h4>
                <p className="text-muted">3 years full-time course (Total credits required: 123 credits)</p>
                <ul className="list-inline social-buttons">
                  <li className="list-inline-item">
                    <a href="https://www.facebook.com/FEITSouthernUC/?epa=SEARCH_BOX">
                      <FontAwesomeIcon icon={faFacebook} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="team-member">
                <img className="mx-auto rounded-circle" src={require('../src/assets/team/it.png')} alt="" />
                <h4>Diploma in Information Technology (IT) </h4>
                <p className="text-muted">2 years 4 months full-time course (Total credits required: 92 credits) </p>
                <ul className="list-inline social-buttons">
                  <li className="list-inline-item">
                    <a href="https://www.facebook.com/FEITSouthernUC/?epa=SEARCH_BOX">
                      <FontAwesomeIcon icon={faFacebook} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-sm-4">
              <div className="team-member">
                <img className="mx-auto rounded-circle" src={require('../src/assets/team/cs.png')} alt="" />
                <h4>Diploma in Computer Science (CS)</h4>
                <p className="text-muted">2 years 4 months full-time course (Total credits required: 92 credits)</p>
                <ul className="list-inline social-buttons">
                  <li className="list-inline-item">
                    <a href="https://www.facebook.com/FEITSouthernUC/?epa=SEARCH_BOX">
                      <FontAwesomeIcon icon={faFacebook} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <p className="large text-muted">Introduction to Programming, Discrete Mathematics, System Analysis and Design, Database System Design, Project, Computer Organization and Architecture, Operating System, Networking and Distributed System, Computer System, Mathematics for Computing, Calculus, Java Programming, Advanced Java Programming, Data Structure and Algorithm, Human Computer Interaction, Visual Basic.Net, Internet Application, Web-Based Systems, Industrial Training.</p>
            </div>
          </div>
        </div>
      </section>


      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <a href="#something">
                <img className="img-fluid d-block mx-auto" src="img/logos/envato.jpg" alt="" />
              </a>
            </div>
            <div className="col-md-3 col-sm-6">
              <a href="#something">
                <img className="img-fluid d-block mx-auto" src="img/logos/designmodo.jpg" alt="" />
              </a>
            </div>
            <div className="col-md-3 col-sm-6">
              <a href="#something">
                <img className="img-fluid d-block mx-auto" src="img/logos/themeforest.jpg" alt="" />
              </a>
            </div>
            <div className="col-md-3 col-sm-6">
              <a href="#something">
                <img className="img-fluid d-block mx-auto" src="img/logos/creative-market.jpg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </section>


      <section className="page-section" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Contact Us</h2>
              <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <form id="contactForm" name="sentMessage" novalidate="novalidate">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input className="form-control" id="name" type="text" placeholder="Your Name *" required="required" data-validation-required-message="Please enter your name." />
                      <p className="help-block text-danger"></p>
                    </div>
                    <div className="form-group">
                      <input className="form-control" id="email" type="email" placeholder="Your Email *" required="required" data-validation-required-message="Please enter your email address." />
                      <p className="help-block text-danger"></p>
                    </div>
                    <div className="form-group">
                      <input className="form-control" id="phone" type="tel" placeholder="Your Phone *" required="required" data-validation-required-message="Please enter your phone number." />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <textarea className="form-control" id="message" placeholder="Your Message *" required="required" data-validation-required-message="Please enter a message."></textarea>
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="clearfix"></div>
                  <div className="col-lg-12 text-center">
                    <div id="success"></div>
                    <button id="sendMessageButton" className="btn btn-primary btn-xl text-uppercase" type="submit">Send Message</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>


      <footer className="footer">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4">
              <span className="copyright">Copyright &copy; Your Website 2019</span>
            </div>
            <div className="col-md-4">
              <ul className="list-inline social-buttons">
              
                <li className="list-inline-item">
                <a href="https://www.facebook.com/FEITSouthernUC/?epa=SEARCH_BOX">
                      <FontAwesomeIcon icon={faFacebook} />
                    </a>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <ul className="list-inline quicklinks">
                <li className="list-inline-item">
                  <a href="#something">Privacy Policy</a>
                </li>
                <li className="list-inline-item">
                  <a href="#something">Terms of Use</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;