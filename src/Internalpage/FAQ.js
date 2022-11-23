import React from 'react';
import  '../Aseset/Css/faq.css';
import { Col, Row ,Container,Accordion } from 'react-bootstrap';
import { useEffect } from 'react';
  function FAQ() {
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])
    return (
    <>
      <Container>
        <Row>
          <Col>
            <h1  className=' pt-4 pb-4 pl-5 aboutheading'>
              FAQ's
            </h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <Accordion className='faq'>
              <Accordion.Item eventKey="0">
                <Accordion.Header>What Is QR Staff And How To Use It?</Accordion.Header>
                <Accordion.Body>
                To make the business organized, the first and foremost important thing is staff management. Managing the staff is a very tiring job. The job can be easy with the use of softwares but choosing the best software, which is easy and cost effective, is even more difficult. But QRStaff understood this struggle and came up with the easiest way to manage your staff digitally.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1" className='mt-3'>
                <Accordion.Header>How To Use The QR Staff App?</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <ol>1. Download the QR Staff app from Play Store</ol>
                    <ol>2. Verify your mobile no. (or Email-Id) with OTP</ol>
                    <ol>3. Add the name of your “Business”</ol>
                    <ol>4. Add your employees</ol>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2" className='mt-3'>
                <Accordion.Header>Is QR Staff A Paid App Or Free Of Charge?</Accordion.Header>
                <Accordion.Body>
                QR Staff is a completely free app which does not have any additional charges to pay.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3" className='mt-3'>
                <Accordion.Header>What Is QR Staff And How To Use It?</Accordion.Header>
                <Accordion.Body>
                To make the business organized, the first and foremost important thing is staff management. Managing the staff is a very tiring job. The job can be easy with the use of softwares but choosing the best software, which is easy and cost effective, is even more difficult. But QRStaff understood this struggle and came up with the easiest way to manage your staff digitally.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4" className='mt-3'>
                <Accordion.Header>In Which Languages Is The QR Staff App Avaiable?</Accordion.Header>
                <Accordion.Body>
                QR Staff app is available in English. We will keep modifying the details further accordingly.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5" className='mt-3'>
                <Accordion.Header>Will Salaries Get Calculated & Attendance Get Marked Automatically ON The App?</Accordion.Header>
                <Accordion.Body>
                Both the things will be done automatically, you just need to fill in the details and focus on growing your business.
                  <p>Enjoy your easy staff management</p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="6" className='mt-3'>
                <Accordion.Header>Can Employees Get Access To The App?</Accordion.Header>
                <Accordion.Body>
                Employees will definitely get the access, they can login with their registered mobile number in the QR Staff mobile application.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5" className='mt-3 mb-5'>
                <Accordion.Header>Can I Use The App For Multiple Businesses?</Accordion.Header>
                <Accordion.Body>
                Yes, you can add as many businesses as you need for free.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
      </>
    )
  }
export default FAQ