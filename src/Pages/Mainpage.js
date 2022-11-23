import React from "react";
import { Col, Row ,Container ,Table,Card} from 'react-bootstrap';
import '../Aseset/Css/mainpage.css' 
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Marquee from "react-fast-marquee";
import tool from '../Aseset/Images/tool.png';
import topbanner from '../Aseset/Images/topbanner.png';
import toolphone from '../Aseset/Images/toolphone.png';
import test from '../Aseset/Images/test.jpg';
import marqee1 from '../Aseset/Images/marqee1.png';
import marqee2 from '../Aseset/Images/marqee2.png';
import marqee3 from '../Aseset/Images/marqee3.png';
import playstoreimg from '../Aseset/Images/playstoreimg.png';
import india from '../Aseset/Images/india.png';
import logoplaystrore from '../Aseset/Images/logoplaystrore.png';
import logoapple from '../Aseset/Images/logoapple.png';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useEffect } from 'react';
import '../Aseset/Css/animate.css';
import ScrollAnimation from 'react-animate-on-scroll';
import arrow from '../Aseset/Images/arrow.svg'
function Mainpage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
     //function for OwlCarousel
  const options = 
  {
    margin: 30,
    responsiveClass: true,
    autoplay: false,
    smartSpeed: 1000,
    responsive: 
    {
      0: {
          items: 1,
      },
      400: {
          items: 1,
      },
      600: {
          items: 2,
      },
      700: {
          items: 2,
      },
      1000: {
          items: 3,
      }
    },
  };

  return (
    <>
      <Container fluid >
        <Row id='topview'>
          <Container>
            <Row>
              <Col sm={6} xs={12}>
                <h1 className='hbannertext1'>Start managing your</h1>
                <h1 className='hbannertext'>staff in just <b>30 second</b> </h1>
                <Card className="numbercard">  
                  <p className="p"><b>Get Start For Free</b></p>
                  <InputGroup className=" inputcard">
                  <InputGroup.Text className="number" >+91 | </InputGroup.Text>
                    <Form.Control
                      type="text"
                      placeholder="Enter Your Number"
                      aria-label="Input group example"
                      aria-describedby="btnGroupAddon2"
                    />
                    <InputGroup.Text id="btnGroupAddon2"><img src={arrow} alt="" height={20} width={30} /></InputGroup.Text>
                  </InputGroup>  
                </Card>
                <p className='hcardtext mb-5 pb-5 mt-5'>Made In <img src={india} alt="" height={15} style={{marginLeft:'10px',marginRight:'10px'}}/> | Available on  <a href="https://play.google.com/store/apps/details?id=in.qrstaff&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"><img src={logoplaystrore}  height={20}alt="" style={{marginLeft:'5px',marginRight:'5px'}} className='footer-socialhover'/></a>  |  <img src={logoapple} height={20} alt="" style={{marginLeft:'5px',marginRight:'5px'}} className='footer-socialhover' /></p>
              </Col>
          <Col sm={6} className='mt-5 d-none d-sm-block'>
             <img src={topbanner}alt=" phoneimage " id="topbanner" />
          </Col>
            </Row>
          </Container>
        </Row>
      </Container>
        <Container className='toolbg mt-5'   >
            <Row  className="ml-2 mr-2">
                <Col sm={12} className=" ">
                <h1 className='text-center tool mt-5'> A Powerfull Tool for <b>Business Owners</b></h1>
                </Col>
            </Row>
            <Row className="ml-2 mr-2" >
                <Col sm={5} className='mt-5'>
                <ScrollAnimation animateIn="fadeInLeft">
                    <Table  className=''>
                        <tr>
                          <td><p className='tooltextright'><b>Manage Multiple Businesses</b><br />
                             You can add & manage multiple businesses with one application</p>
                          </td>
                            <td><img src={tool} alt="" /></td>
                        </tr>
                        <tr> 
                          <td><p className='tooltextright'><b>Manage Multiple Businesses</b><br />
                              You can add & manage multiple businesses with one application</p>
                            </td>
                            <td><img src={tool} alt="" /></td>
                        </tr>
                        <tr>
                          <td><p className='tooltextright'><b>Manage Multiple Businesses</b><br />
                             You can add & manage multiple businesses with one application</p>
                          </td>
                            <td><img src={tool} alt="" /></td>
                        </tr>
                    </Table>
                    </ScrollAnimation>
                </Col>
                <Col sm={2} className='mt-5 mb-5 toolbg'>
                  <ScrollAnimation animateIn="bounceIn">
                    <center><img src={toolphone} alt="" /></center>
                  </ScrollAnimation>
                </Col>
                <Col sm={5} className='mt-5  toolbg'>
                <ScrollAnimation animateIn="fadeInRight">
                  <Table>
                    <tr>
                      <td><img src={tool} alt="" /></td>
                      <td>
                        <p className='tooltext'><b>Manage Multiple Businesses</b><br />
                           You can add & manage multiple businesses with one application</p>
                      </td>
                    </tr>
                    <tr>
                      <td><img src={tool} alt="" /></td>
                      <td>
                        <p className='tooltext'><b>Manage Multiple Businesses</b><br />
                           You can add & manage multiple businesses with one application</p>
                      </td>
                    </tr>
                    <tr>
                      <td><img src={tool} alt="" /></td>
                      <td>
                        <p className='tooltext'><b>Manage Multiple Businesses</b><br />
                           You can add & manage multiple businesses with one application</p>
                      </td>
                    </tr>
                  </Table>
                  </ScrollAnimation>
                </Col>
            </Row>
        </Container>
        <Container fluid >
        <Row className='mt-5'>
          <Marquee  direction="left" speed={120} gradientColor='false' className='mt-5 mb-5 bg-dark ' pauseOnHover='true' >
            <div className="image_wrapper">
                <img src={marqee1} alt="" />
              </div>
            <div className="image_wrapper">
              <img src={marqee3} alt="" />
            </div>
            <div className="image_wrapper">
              <img src={marqee1} alt="" />
            </div>
            <div className="image_wrapper">
              <img src={marqee2} alt=""  />
            </div>
            <div className="image_wrapper">
              <img src={marqee3} alt="" />
            </div>
            <div className="image_wrapper">
              <img src={marqee2} alt="" />
            </div>
          </Marquee>
        </Row>
      </Container>
      <Container>
           <Row className='mt-3'>
            <h1 className='mt-3  text-center clientsay'>What our <b>Customers</b> are saying</h1>
            <h6 className='text-center text-muted'>From beginner to enterprise brand, everyone loves QR Staff</h6>
           </Row>
            <Row className=' mt-2' >
            <ScrollAnimation animateIn="bounceIn">
           <div className="owl">
           <OwlCarousel className="owl-theme stretch mt-5 " loop {...options}>
              <div className="">
                <img src={marqee1} alt="" style={{height:50,width:100}} />
                <p className='mt-3'><b>QR Staff Pvt.Ltd</b></p>
                <p className='text-muted'>To make the business organized, the first and foremost important thing is staff management. Managing the staff is a very tiring job. The job can be easy with the use of softwares but choosing the best software, which is easy and cost effective, is even more difficult. But QRStaff understood this struggle and came up with the easiest way to manage your staff digitally.</p>
                <table>
                <tr>
                  <td><img src={test} alt="" style={{height:50,width:50,borderRadius:30}} /> 
                 </td>
                  <td ><p className='m-3'> <b>Shivam bhargava</b> <br/>
                         Front End Developer 1</p></td>  
                </tr>  
                 </table>            
              </div> 
              
            </OwlCarousel>
            </div>  
           </ScrollAnimation>
              </Row>   
          </Container>
          <div className="container-fluid">
              <div className="row mt-5">
                <div className="col-sm-12 bg-img bg-overlay .bg-overlay-white:after" id="nextbg">
                  <h1 className='text-light' ><center>Are You ready to Automate Your</center></h1>
                  <h1 className='text-light'><b><center>Staff Attendance & Payroll</center></b></h1>
                  <center>
                    <a href="https://play.google.com/store/apps/details?id=in.qrstaff&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1" >	
                      <img src={playstoreimg} alt=""  id='playstore' className="download"/>
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=in.qrstaff&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">	
                      <img src={playstoreimg} alt=""  id='playstore' className="download"/>
                    </a>
                  </center>
                  <h4 className='text-light mt-5 ' ><i><center>1,000 + Registered Business  |  10,000 + Registerd Satff</center></i></h4>

                </div>
              </div>
            </div>
          
    </>
  )
}

export default Mainpage
