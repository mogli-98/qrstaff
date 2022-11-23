import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import bluelogo from '../Aseset/Images/bluelogo.png';
import demopicheader from '../Aseset/Images/demopicheader.svg';

function Headera() {
    const [showDropdown, setShowDropdown] = useState(false);

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <Dropdown
      onMouseLeave={() => setShowDropdown(false)}
      onMouseOver={() => setShowDropdown(true)}
      style={{ width: '166px' }}
    >
      <Dropdown.Toggle
        className="main-style"
        id="dropdown-basic"
      >
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu show={showDropdown}>
      <div className="container megamenu1 " show={showDropdown}>
                        <div className="row bg-white rounded-0  shadow-sm">
                        <div className="col-lg-12 col-xl-12">
                            <div className="p-4">
                              <div className="row">
                                  <div className=" col-sm-4">
                                    
                                    <table>
                                      <tr>
                                        <td><img src={demopicheader} alt="" style={{height:50,width:50}} /> 
                                      </td>
                                        <td> <h6 className="font-weight-bold text-uppercase">MegaMenu heading</h6>
                                        <p className='small'>Copyright ©2022, Intok E-Solutions33</p>
                                        </td>  
                                      </tr>  
                                      </table> 
                                  </div>
                                  <div className="col-sm-4">
                                      <table>
                                      <tr>
                                        <td><img src={demopicheader} alt="" style={{height:50,width:50}} /> 
                                      </td>
                                        <td> <h6 className="font-weight-bold text-uppercase">MegaMenu heading</h6>
                                        <p className='small'>Copyright ©2022, Intok E-Solutions44</p>
                                        </td>  
                                      </tr>  
                                      </table>
                                
                                  </div>
                                  <div className=" col-sm-4">
                                      <table>
                                      <tr>
                                        <td><img src={demopicheader} alt="" style={{height:50,width:50}} /> 
                                      </td>
                                        <td> <h6 className="font-weight-bold text-uppercase">MegaMenu heading</h6>
                                        <p className='small'>Copyright ©2022, Intok E-Solutions</p>
                                        </td>  
                                      </tr>  
                                      </table>
                                
                                  </div>
                                  <div className=" col-sm-4 mt-4">
                                      <table>
                                      <tr>
                                        <td><img src={demopicheader} alt="" style={{height:50,width:50}} /> 
                                      </td>
                                        <td> <h6 className="font-weight-bold text-uppercase">MegaMenu heading</h6>
                                        <p className='small'>Copyright ©2022, Intok E-Solutions</p>
                                        </td>  
                                      </tr>  
                                      </table>
                                
                                  </div>
                                  
                              </div>
                            </div>
                        </div>
                        </div>
                    </div> 
      </Dropdown.Menu>
    </Dropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Headera;