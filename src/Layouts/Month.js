import React from 'react'
import { Container, Row, Col, Accordion} from 'react-bootstrap';
import codemangement from '../Aseset/Images/codemangement.svg';

function Free() {
  return (
    <>
        <Container>
            <Row className='Code management'>
                <Col xs={12}>
                    <img src={codemangement} alt="" height={40}  className='mt-4'/>
                    <p className='large mt-2'>Code management</p>
                </Col>
            </Row>
            <Row className='Code management part1'>
                <Col xs={6}>
                    <Accordion flush className=''>
                        <Accordion.Item eventKey="0" >
                            <Accordion.Header>Accordion 1</Accordion.Header>
                            <Accordion.Body>
                                Host open source projects in public GitHub repositories, accessible via web or command line. Public repositories are accessible to anyone at GitHub.com.
                            </Accordion.Body>
                        </Accordion.Item>                                 
                    </Accordion> 
                </Col>
                <Col xs={6}>
                    Unlimited                   
                </Col>
            </Row>
            <Row className='Code management part2'>
                <Col xs={6}>
                    <Accordion flush className=''>
                        <Accordion.Item eventKey="0" >
                            <Accordion.Header>Accordion 1</Accordion.Header>
                            <Accordion.Body>
                                Host open source projects in public GitHub repositories, accessible via web or command line. Public repositories are accessible to anyone at GitHub.com.
                            </Accordion.Body>
                        </Accordion.Item>                                 
                    </Accordion> 
                </Col>
                <Col xs={6}>
                    Unlimited                   
                </Col>
            </Row>
            <Row className='Code management'>
                <Col xs={12}>
                    <img src={codemangement} alt="" height={40}  className='mt-4'/>
                    <p className='large mt-2'>Code management</p>
                </Col>
            </Row>
            <Row className='Code management part1'>
                <Col xs={6}>
                    <Accordion flush className=''>
                        <Accordion.Item eventKey="0" >
                            <Accordion.Header>Accordion 1</Accordion.Header>
                            <Accordion.Body>
                                Host open source projects in public GitHub repositories, accessible via web or command line. Public repositories are accessible to anyone at GitHub.com.
                            </Accordion.Body>
                        </Accordion.Item>                                 
                    </Accordion> 
                </Col>
                <Col xs={6}>
                    Unlimited                   
                </Col>
            </Row>
            <Row className='Code management part2'>
                <Col xs={6}>
                    <Accordion flush className=''>
                        <Accordion.Item eventKey="0" >
                            <Accordion.Header>Accordion 1</Accordion.Header>
                            <Accordion.Body>
                                Host open source projects in public GitHub repositories, accessible via web or command line. Public repositories are accessible to anyone at GitHub.com.
                            </Accordion.Body>
                        </Accordion.Item>                                 
                    </Accordion> 
                </Col>
                <Col xs={6}>
                    Unlimited                   
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default Free