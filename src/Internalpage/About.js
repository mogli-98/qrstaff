import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';
import '../Aseset/Css/About.css';
import '../Aseset/Css/animate.css';
import { useEffect } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
function About() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
        <Container>
          <Row>
            <Col sm={12}>
              <ScrollAnimation animateIn="bounceIn">
                <h1 className='text-center aboutheading'>ABOUT US</h1>
              </ScrollAnimation>
            </Col>
          </Row>
          <Row>
            <Col sm={3}>
              <ScrollAnimation animateIn="fadeInLeft">
                  <h4><b>Who Are We...</b></h4>
              </ScrollAnimation>
             
            </Col>
            <Col sm={9}>
              <p>
                To make the business organized, the first and foremost important thing is staff management. Managing the staff is a very tiring job. The job can be easy with the use of softwares but choosing the best software, which is easy and cost effective, is even more difficult. But QRStaff understood this struggle and came up with the easiest way to manage your staff digitally.
                With some finger clicks, manage your staff, keep the track of everything and grow your business effectively.
              </p>
              <p>
                To make the business organized, the first and foremost important thing is staff management. Managing the staff is a very tiring job. The job can be easy with the use of softwares but choosing the best software, which is easy and cost effective, is even more difficult. But QRStaff understood this struggle and came up with the easiest way to manage your staff digitally.
                With some finger clicks, manage your staff, keep the track of everything and grow your business effectively.
              </p>
            </Col>
          </Row>
        </Container>
    </>
  );
}

export default About;