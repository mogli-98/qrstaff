import React from 'react';
import {Container, Row, Col, Form} from 'react-bootstrap';
import email from'../Aseset/Images/email.png';
import phone from'../Aseset/Images/phone.png';
import whatsapp from'../Aseset/Images/whatsapp.png';
import loaction from'../Aseset/Images/loaction.png';
import { useEffect } from 'react';
import '../Aseset/Css/About.css';
import ScrollAnimation from 'react-animate-on-scroll';
import '../Aseset/Css/animate.css';
function Contact () {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>

      <Container>
        <Row>
          <Col sm={12}>
            <ScrollAnimation animateIn="bounceIn">
              <h1 className=' Contactheading'>How can we help you ?</h1>
              <h5 className='subcontactheading'>Get all your support related in one place.</h5>
            </ScrollAnimation>
          </Col>
        </Row>
        <Row>
          <Col md={6} sm={6} className='mb-5'>
            <Row>
              <Col sm={6} xs={12} className='mb-2'>
              <Form className='d-flex'>
                  <Form.Control type='search' placeholder='Name' className='me-2' aria-label='Search'/>
                </Form>
              </Col>
              <Col sm={6} xs={12}>
                <Form className='d-flex'>
                  <Form.Control type='search' placeholder='Name' className='me-2' aria-label='Search'/>
                </Form>
              </Col>
            </Row>
            <Row>
              <Col sm={12} className='mt-3'>
                <Form className='d-flex'>
                  <Form.Control  type='search' placeholder='Subject' className='me-2 mb-2' aria-label='Search'/>
                </Form>
              </Col>
            </Row>
            <Row>
              <Col sm={12} className='mt-3'>
                <Form className='d-flex'>
                  <Form.Control  type='search' placeholder='Subject' className='me-2 mb-2' aria-label='Search'/>
                </Form>
              </Col>
            </Row>
            <Row>
              <Col>
              <button className='conatct-button mt-3 '><b>Send Message</b></button>
</Col>
            </Row>
          </Col>
          <Col md={6} sm={6} className='mb-5'>
          <table>
              <tr>
                <td><img src={loaction} style={{height:35}} alt=''/></td>
                <td className='text-left'><a href="https://www.google.com/maps/place/QR+Staff+-+Free+staff+attendance,+payroll+and+tracking./@23.2313637,77.4579995,15z/data=!4m6!3m5!1s0x397c43f7264273f3:0x514562d5bdfa66eb!8m2!3d23.2313637!4d77.4579995!16s%2Fg%2F11sm7p28vc" className='contact-link'><span className='text-dark pl-2'>6, B-Nest, BSCDCL, Kalibadi Rd, Near Natraj Petrol Pump, Sector A, Berkheda, Bhopal, Madhya Pradesh 462023</span></a></td>
              </tr>
              <tr className='mt-5'>
                <td ><img src={phone} style={{height:30}} className ="mt-3" alt=''/></td>
                <td className='pt-2 footer-link'><a href="tel:+919109171245" className='contact-link'><span className='text-dark pl-2 footer-link'> +91-91091 71245</span></a></td>
              </tr>
              <tr>
                <td><img src={whatsapp} style={{height:29}} className ="mt-3" alt=''/></td>
                <td className='pt-2'><a href="https://wa.me/+919109171245" className='contact-link'><span className='text-dark pl-2 contact-link'>+91-91091 71245</span></a></td>
              </tr>
              <tr>
                <td><img src={email} style={{height:30}} className ="mt-3" alt=''/></td>
                <td className='pt-3'><a href="https://accounts.google.com" className='contact-link'><span className='text-dark pl-2 contact-link'>helloqrstaff@gmail.com </span></a></td>
              </tr>
            </table>
          </Col>
        </Row>
      </Container>
      
    </>
  )
}

export default Contact
