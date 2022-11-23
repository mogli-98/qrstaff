import React from 'react'
import '../Aseset/Css/pricing.css'
import { Container, Row, Col, Card, Accordion } from 'react-bootstrap';
import { useEffect } from 'react';
import codemangement from '../Aseset/Images/codemangement.svg';


function Pricing() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
  return (
    <>
        <Container>
            <Row>
                <Col lg={12} sm={12} xs={12}>
                <h1 className='pricinghead mt-5 text-center'><b>Get the complete Version of QR-Staff.</b></h1>
                <h6 className='text-center mt-3'><b>How often do you want to pay?</b></h6>
                </Col>
            </Row>
            <Row className='mt-5'>
                <Col md={4}sm={12} xs={12} className='pb-5'>
                    <Card  className='price' style={{ borderRadius: 20 ,boxShadow: 'rgb(38, 57, 77) 10px 10px 15px -5px'}}>
                        <h4 className='text-center mt-5'><b>Free</b></h4>
                        <p className='text-center'>The basics for individuals<br/>and organizations
                        </p>
                        <p className='text-center'>$ <b className='zero'> 0</b> per year forever                        
                        </p>
                        <button className='m-2 pricebutton'> Create a Free Organization</button>
                        <div className='d-none d-sm-block  accordioncolor' style={{ borderBottomLeftRadius:15,borderBottomRightRadius:15  }}>
                                <Accordion flush className='m-3 '>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header className=''>Accordion Item #1</Accordion.Header>
                                        <Accordion.Body className=''>
                                            Host open source projects in public GitHub repositories, accessible via web or command line. Public repositories are accessible to anyone at GitHub.com.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>Accordion Item #2</Accordion.Header>
                                        <Accordion.Body>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                            culpa qui officia deserunt mollit anim id est laborum.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                    </Card>
                </Col>
                <Col md={4}sm={12} xs={12} className='pb-5'>
                    
                    <Card  className='cardborder' border=" #232c59" style={{ borderRadius: 30 , borderColor:'#182973',borderWidth:5 ,boxShadow: 'rgb(38, 57, 77) 10px 10px 15px -5px'}}>
                        <h4 className='text-center mt-5'>Free</h4>
                        <p className='text-center small'>The basics for individuals<br/>
                            and organizations
                        </p>
                        <p className='text-center'>$ <b className='zero'> 0</b> per year forever                        
                        </p>
                        <button className='m-2 pricebuttonactive'> Create a Free Organization</button>
                        <div className='d-none d-sm-block  accordioncolor'>
                                <Accordion flush className='m-3 '>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header className=''>Accordion Item #1</Accordion.Header>
                                        <Accordion.Body className=''>
                                            Host open source projects in public GitHub repositories, accessible via web or command line. Public repositories are accessible to anyone at GitHub.com.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>Accordion Item #2</Accordion.Header>
                                        <Accordion.Body>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                            culpa qui officia deserunt mollit anim id est laborum.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                            <div className='accordioncolor' style={{ borderBottomLeftRadius:25,borderBottomRightRadius:25  }}>
                                <p className='text-center m-3 accordioncolor'> *Discounted pricing is for new yearly customers paying with credit cards or PayPal. After first year, price is subject to change. GitHub will send you a notification email at least 30 days in advance of any price change.</p>
                            </div>
                    </Card>
                </Col>
                <Col md={4}sm={12} xs={12}>
                    <Card  className='price' style={{ borderRadius: 30 ,boxShadow: 'rgb(38, 57, 77) 10px 10px 15px -5px'}}>
                        <h4 className='text-center mt-5 '>Free</h4>
                        <p className='text-center small'>The basics for individuals<br/>
                                and organizations
                            </p> 

                            <p className='text-center'>$ <b className='zero'> 0</b> per year forever                        
                            </p>
                            <button className='m-2 pricebutton'> Create a Free Organization</button>
                            <div className='d-none d-sm-block  accordioncolor'>
                                <Accordion flush className='m-3 '>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header className=''>Accordion Item #1</Accordion.Header>
                                        <Accordion.Body className=''>
                                            Host open source projects in public GitHub repositories, accessible via web or command line. Public repositories are accessible to anyone at GitHub.com.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>Accordion Item #2</Accordion.Header>
                                        <Accordion.Body>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                            culpa qui officia deserunt mollit anim id est laborum.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                            <div className='accordioncolor' style={{ borderBottomLeftRadius:25,borderBottomRightRadius:25}}>
                            <p className='text-center m-3 accordioncolor'> *Discounted pricing is for new yearly customers paying with credit cards or PayPal. After first year, price is subject to change. GitHub will send you a notification email at least 30 days in advance of any price change.</p>
                            </div>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col lg={12} sm={12} xs={12}>
                    <h3 className='text-center mt-5 '>Compare all Features</h3>
                </Col>
            </Row>
        </Container>
        <Container>
            <Row>
                <Col>
                <div class="tableContainer d-block d-sm-none">
                <table className='pricetable'>
                    <caption>
                        This is a descriptive table caption.
                    </caption>
                    <thead className='phonethead'>
                        <tr className="phonetr">
                            <th class="emptyCell" title="Empty cell" className="phoneth"></th>
                            <th scope="col" className="phoneth">Table header cell</th>
                            <th scope="col" className="phoneth">Table header cell</th>
                            <th scope="col" className="phoneth">Table header cell</th>
                            <th scope="col" className="phoneth">Table header cell</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="mobileColumnGroup phonetr">
                        
                            <th scope="colgroup" colspan="4" className="phoneth"><span>Mobile column group</span></th>
                        </tr>
                        <tr className="phonetr">
                            <th scope="row" class="rowHeader phoneth">Desktop row header 1</th>
                            <td className="phonetd">Table data cell</td>
                            <td className="phonetd">
                            <span title="Feature is included" class="featureCheck">✔</span>
                            </td>
                            <td className="phonetd">Table data cell</td>
                            <td className="phonetd">
                            <span title="Feature is not included" class="featureX">✘</span>
                            </td>
                        </tr>

                        <tr class="mobileColumnGroup phonetr">
                        
                            <th scope="colgroup" colspan="4" className="phoneth"><span>Mobile column group</span></th>
                        </tr>
                        <tr className="phonetr">
                            <th scope="row" class="rowHeader phoneth">Desktop row header 2</th>
                            <td className="phonetd">Table data cell</td>
                            <td className="phonetd">
                            <span title="Feature is included" class="featureCheck">✔</span>
                            </td>
                            <td className="phonetd">Table data cell</td>
                            <td className="phonetd">
                            <span title="Feature is not included" class="featureX">✘</span>
                            </td>
                        </tr>

                        <tr class="mobileColumnGroup phonetr">
                        
                            <th scope="colgroup" colspan="4" className="phoneth"><span>Mobile column group</span></th>
                        </tr>
                        <tr className="phonetr">
                            <th scope="row" class="rowHeader phoneth">Desktop row header 3</th>
                            <td className="phonetd">Table data cell</td>
                            <td className="phonetd">
                            <span title="Feature is included" class="featureCheck">✔</span>
                            </td>
                            <td className="phonetd">Table data cell</td>
                            <td className="phonetd">
                            <span title="Feature is not included" class="featureX">✘</span>
                            </td>
                        </tr>   

                        <tr class="mobileColumnGroup phonetr">
                            
                            <th scope="colgroup" colspan="4"className="phoneth" ><span>Mobile column group</span></th>
                        </tr>
                        <tr  className="phonetr">
                            <th scope="row" class="rowHeader phoneth">Desktop row header 4</th>
                            <td className="phonetd">Table data cell</td>
                            <td className="phonetd">
                            <span title="Feature is included" class="featureCheck">✔</span>
                            </td>
                            <td className="phonetd">Table data cell</td>
                            <td className="phonetd">
                            <span title="Feature is not included" class="featureX">✘</span>
                            </td>
                        </tr>        
                    </tbody>
                </table>
            </div>

                </Col>
            </Row>
            <Row className='sticky '> 
                <Col sm={3} className='blanck d-none d-sm-block'>
                
                </Col>
                <Col sm={3} className='d-none d-sm-block'>
                    <p>Free</p>
                    <p><b className='large'>$0</b> per user/year forever</p>
                    <button className='m-2 pricebutton'> Create a Free Organization</button>
                </Col>
                <Col sm={3} className='d-none d-sm-block'>
                    <p >Free</p>
                    <p><b className='large'>$0</b> per user/year forever</p>
                    <button className='m-2 pricebutton'> Create a Free Organization</button>
                </Col>
                <Col sm={3} className='d-none d-sm-block'>
                    <p>Free</p>
                    <p><b className='large'>$0</b> per user/year forever</p>
                    <button className='m-2 pricebutton'> Create a Free Organization</button>
                </Col>
                
            </Row>
            <Row >
                <Col sm={3} className=' d-none d-sm-block'>
                    <img src={codemangement} alt="" height={40}  className='mt-4'/>
                    <p className='large mt-2'>Code management</p>
                </Col>
            </Row>
            <Row >
                <Col sm={3} className=' d-none d-sm-block'>
                    <Accordion flush className=''>
                                <Accordion.Item eventKey="0" >
                                    <Accordion.Header>Accordion 1</Accordion.Header>
                                    <Accordion.Body>
                                        Host open source projects in public GitHub repositories, accessible via web or command line. Public repositories are accessible to anyone at GitHub.com.
                                    </Accordion.Body>
                                </Accordion.Item> 
                                
                        </Accordion>                
                </Col>
                <Col sm={3} className=' d-none d-sm-block'><p className='text-center'>Unlimited</p></Col>
                <Col sm={3}className=' d-none d-sm-block'><p className='text-center'>Unlimited</p></Col>
                <Col sm={3} className=' d-none d-sm-block'><p className='text-center'>Unlimited</p></Col>
            </Row>
            <Row >
                <Col sm={3} className=' d-none d-sm-block'>
                    <Accordion flush className=''>
                                <Accordion.Item eventKey="0" >
                                    <Accordion.Header>Accordion 2</Accordion.Header>
                                    <Accordion.Body>
                                        Host open source projects in public GitHub repositories, accessible via web or command line. Public repositories are accessible to anyone at GitHub.com.
                                    </Accordion.Body>
                                </Accordion.Item>
                                
                        </Accordion>                
                </Col>
                <Col sm={3} className=' d-none d-sm-block'><p className='text-center'>Unlimited</p></Col>
                <Col sm={3} className=' d-none d-sm-block'><p className='text-center'>Unlimited</p></Col>
                <Col sm={3} className=' d-none d-sm-block'><p className='text-center'>Unlimited</p></Col>
            </Row>
            <Row>
            <Col sm={3} className=' d-none d-sm-block'>
                    <img src={codemangement} alt="" height={40}  className='mt-4'/>
                    <p className='large mt-2'>Code management</p>
                </Col>
            </Row>

            <Row >
                <Col sm={3} className=' d-none d-sm-block'>
                    <Accordion flush className=''>
                                <Accordion.Item eventKey="0" >
                                    <Accordion.Header>Accordion 3</Accordion.Header>
                                    <Accordion.Body>
                                        Host open source projects in public GitHub repositories, accessible via web or command line. Public repositories are accessible to anyone at GitHub.com.
                                    </Accordion.Body>
                                </Accordion.Item>
                                
                        </Accordion>                
                </Col>
                <Col sm={3} className=' d-none d-sm-block'><p>Unlimited</p></Col>
                <Col sm={3} className=' d-none d-sm-block'><p>Unlimited</p></Col>
                <Col sm={3} className=' d-none d-sm-block'><p>Unlimited</p></Col>
            </Row>
            <Row >
                <Col sm={3} className=' d-none d-sm-block'>
                    <Accordion flush className=''>
                                <Accordion.Item eventKey="0" >
                                    <Accordion.Header>Accordion 4</Accordion.Header>
                                    <Accordion.Body>
                                        Host open source projects in public GitHub repositories, accessible via web or command line. Public repositories are accessible to anyone at GitHub.com.
                                    </Accordion.Body>
                                </Accordion.Item>
                                
                        </Accordion>                
                </Col>
                <Col sm={3} className=' d-none d-sm-block'><p>Unlimited</p></Col>
                <Col sm={3} className=' d-none d-sm-block'><p>Unlimited</p></Col>
                <Col sm={3} className=' d-none d-sm-block'><p>Unlimited</p></Col>
            </Row>
        </Container>
        
    </>
  )
}

export default Pricing 
