import React from 'react'
import { Col, Row ,Container } from 'react-bootstrap';
import logo from '../Aseset/Images/logo.png'
import facebook from '../Aseset/Images/facebook.svg'
import insta from '../Aseset/Images/insta.svg'
import linkedin from '../Aseset/Images/linkedin.svg'
import twitter from '../Aseset/Images/twitter.svg'
import india from '../Aseset/Images/india.png'
import { Link } from "react-router-dom";
import '../Aseset/Css/mainpage.css' 


function Footer() {

    return (
        <>
        <Container fluid >
            <Row id='footerbg'>
                <Col>
                    <Container  className='mt-5 pb-5 mb-2'>
                        <Row  id='footerbg'>
                            <Col sm={3}>
                                <img src={logo} alt="" 
                                    style={{
                                    height:50 ,
                                    marginTop :40 ,                 
                                }}/>
                                <p className='text-light mt-4' >QR Staff app is available in English. We will keep modifying the details further accordingly.</p>
                                <div className='footer-social-container' >
                                    <a href="https://www.facebook.com/qrstaff/"><img src={facebook} alt="facebook"  className='footer-social' /></a>
                                    <a href="https://www.linkedin.com/company/qrstaff/"><img src={linkedin} alt="linkedin" className='footer-social' /></a>
                                    <a href="https://www.instagram.com/qr_staff/"><img src={insta} alt="instagram"  className='footer-social'/></a>
                                    <a href="/#"><img src={twitter} alt="twitter" className='footer-social' /></a>
                                </div>
                            </Col>
                            <Col sm={3}>
                                <ul id='list' style={{ color: '#F9C70F',marginTop :50}}>
                                <li><Link to='/About' className='footer-link footer-linkhover text-light'><span className='footer-linkhover'>About Us</span></Link></li>
                                <li><Link to='/Condition' className='footer-link text-light'><span className='footer-linkhover'>Terms & Conditions</span></Link></li>
                                <li><Link className='footer-link footer-linkhover text-light'> <span className='footer-linkhover'>Privacy Policy</span></Link></li>
                                <li ><Link to='/Contact' className='footer-link footer-linkhover text-light'><span className='footer-linkhover'>Contact Us</span></Link></li>
                                <li ><Link to='/Pricing' className='text-light footer-link footer-linkhover'><span className='footer-linkhover'>Pricing</span></Link></li>
                                </ul>
                            </Col>
                            <Col sm={3}>
                                <ul id='list' style={{ color: '#F9C70F',marginTop :50}}>
                                    <li className='text-light footer-link'><a href="https://drive.google.com/drive/folders/1cVdC4yWoFUTGHN7WoZxbqxNHhygB_Dma" className='text-light footer-link'><span className='footer-linkhover'>Media Kit</span></a> </li>
                                    <li className='footer-link footer-linkhover text-light'><a href='https://blog.qrstaff.in/' className='text-light footer-link'><span className='footer-linkhover'>Blogs</span></a></li>
                                    <li className='text-light footer-link'><span className='footer-linkhover'>Report a Bug</span></li>
                                    <li className='text-light footer-link footer-linkhover'><Link to ='/FAQs' className='footer-link footer-linkhover text-light'><span className='footer-linkhover'>FAQ'S</span></Link></li>
                                </ul>
                            </Col> 
                            <Col sm={3}>
                                <p className='text-light mt-5'><b>Contact Us</b></p>          
                                <span  className='large text-light' ><u>Sales</u></span>
                                <p className='text-light'>Call: <a href="tel:+919109171245" className='contact-link'><span className='text-light pl-2 contact-link'>+91-91091 71244</span></a><br/>
                                Email: <a href="https://accounts.google.com" className='contact-link'><span className='text-light pl-2 contact-link'>sales@qrstaff.in</span></a></p>
                                <span  className='large text-light' ><u>Support</u></span>
                                <p className='text-light'>Call:<a href="tel:+919109171245" className='contact-link'><span className='text-light pl-2 contact-link'> +91-91091 71244</span></a><br/>
                                        Email: <a href="https://accounts.google.com" className='contact-link'><span className='text-light pl-2 contact-link'>support@qrstaff.in</span></a></p>
                            </Col>
                        </Row>
                       
                    </Container>
                </Col>
            </Row>
            <Row className='bg-dark pt-3 pb-3'>
                <Col>
                <Container>
                <Row>
                    <Col sm={6} xs={12}><h6 className=''><p className='text-light '>Copyright ©2022, Intok E-Solutions Private Limited</p></h6>
                    </Col>
                    <Col sm={6} xs={12}><h6 className='fooo'><b className='text-light fooo'>Made In <img src={india}  height={15}alt="" /> </b></h6>
                    </Col>
                </Row>
            </Container>
                </Col>
            </Row>
         </Container>
        </>
    )
}
export default Footer