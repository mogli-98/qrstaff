//importing bootstrap 5 css
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import '../Aseset/Css/header.css';
import bluelogo from '../Aseset/Images/bluelogo.png';
import demopicheader from '../Aseset/Images/demopicheader.svg';
import { Link } from "react-router-dom";

function Header () {
  const [showDropdown, setShowDropdown] = useState(false);
 
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
          <div className="container">
            <a href="/#" className="navbar-brand font-weight-bold "><Link to='/'><img src={bluelogo} height={50} alt="" /></Link></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span aria-hidden="true">&times;</span>
            </button>
            <div id="navbarSupportedContent" className="collapse navbar-collapse ">
              <div className='container-fluid '>
              <ul className="navbar-nav mx-auto justify-content-end">
                <li className="nav-item dropdown megamenu2">
                  <a href='' id="megamneu1"  data-bs-toggle="dropdown" aria-expanded="false"onMouseLeave={() => setShowDropdown(false)}
      onMouseOver={() => setShowDropdown(true)} className={`nav-link dropdown-toggle font-weight-bold  dropdown-toggle text-dark `} ><b>Industries</b></a>
        
                    <div aria-labelledby="dropdownMenuButton2" className="dropdown-menu " show={showDropdown}>
                    
                   <div className="container-fluid dropdown-menu2 " show={showDropdown}>
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
                    </div>
                   
                </li>

                <li className="nav-item dropdown megamenu2"><a href='' id="megamneu1" data-bs-toggle="dropdown" aria-expanded="false" className="nav-link dropdown-toggle font-weight-bold  text-dark dropdown-toggle"><b>Products</b></a>
                    <div aria-labelledby="dropdownMenuButton2" className="dropdown-menu border-0 p-0 m-0">
                    <div className="container-fluid">
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
                    </div>
                </li>
                <li className="nav-item dropdown megamenu2"><a href='' id="megamneu1"  data-bs-toggle="dropdown" aria-expanded="false" className="nav-link dropdown-toggle  text-dark dropdown-toggle"><b>Company</b></a>
                    <div aria-labelledby="dropdownMenuButton2" className="dropdown-menu border-0 p-0 m-0">
                    <div className="container-fluid">
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
                    </div>
                </li>
              </ul>
                       
              </div>
              <button className='header-button'><b>Get Started</b></button>

                
              </div>
            </div>
          
        </nav>
        
        

  );
}

export default Header;