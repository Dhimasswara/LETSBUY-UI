import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Footer = () => {
    return (
        <footer class="footer-main bg-dark mb-0 position-relative">
            {/* <div className="row">
                <div className="col-4">
                    <div style={{width: '80px', height: '80px'}} className='btn-salmon'>Hello</div>
                </div>
                <div className="col-4">
                    
                </div>
                <div className="col-4">
                    
                </div>
                
            </div> */}
            {/* <div className="hello">
                <p>HELLO</p>
            </div> */}
            {/* <p className='p-0 m-0'>HELLo</p> */}
            <div className="container">
                <div className="row text-light">
                    <div className="col-12 col-sm-6 col-md-4 d-flex align-items-center">
                        <div className="address bg-secondary border rounded me-2" style={{ height: '70px', width: '70px' }}></div>
                        <div className="caption">
                            <h5 className='m-0 p-0'>Address</h5>
                            <p className='m-0 p-0'>Bekasi, Jawa Barat</p>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 d-flex align-items-center">
                        <div className="address bg-secondary border rounded me-2 mt-4 mt-sm-0" style={{ height: '70px', width: '70px' }}></div>
                        <div className="caption">
                            <h5 className='m-0 p-0'>Contact</h5>
                            <p className='m-0 p-0'>+6285-8320-5871</p>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-4 d-flex align-items-center">
                        <div className="address bg-secondary border rounded me-2 mt-4 mt-md-0" style={{ height: '70px', width: '70px' }}></div>
                        <div className="caption">
                            <h5 className='m-0 p-0'>Email</h5>
                            <p className='m-0 p-0 text-wrap'>dhimasswara08@gmail.com</p>
                        </div>
                    </div>
                </div>
                <hr className='border mt-5'></hr>
                <div className="row mt-5">
                    <div className="col-12 d-flex justify-content-center gap-4">
                        <Link to={'https://github.com/dhimasswara'} style={{height: '40px', width:'40px' }} className='d-flex align-items-center justify-content-center bg-light no-link'><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></Link>
                        <Link to={'https://www.linkedin.com/in/dhimasswara/'} style={{height: '40px', width:'40px' , color: 'blue'}} className='d-flex align-items-center justify-content-center bg-light'><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></Link>
                        <Link to={'https://instagram.com/dhimasswara'} style={{height: '40px', width:'40px' , color: 'purple'}} className='d-flex align-items-center justify-content-center bg-light'><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></Link>
                        
                    </div>
                </div>
            </div>
            <footer className='bg-black position-absolute bottom-0 w-100 text-center d-flex align-items-center justify-content-center text-light'>
                <p className='p-0 m-0 p-2' style={{fontSize: '13px'}}>© Copyright 2023 Dhimasswara. All rights reserved.</p>
            </footer>
        </footer>
    )
}

export default Footer