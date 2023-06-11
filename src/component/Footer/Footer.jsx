import { faFacebook, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
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
                    <div className="col-4 d-flex align-items-center">
                        <div className="address bg-secondary border rounded me-2" style={{ height: '70px', width: '70px' }}></div>
                        <div className="caption">
                            <h5 className='m-0 p-0'>Address</h5>
                            <p className='m-0 p-0'>Bekasi, Jawa Barat</p>
                        </div>
                    </div>
                    <div className="col-4 d-flex align-items-center">
                        <div className="address bg-secondary border rounded me-2" style={{ height: '70px', width: '70px' }}></div>
                        <div className="caption">
                            <h5 className='m-0 p-0'>Contact</h5>
                            <p className='m-0 p-0'>Bekasi, Jawa Barat</p>
                        </div>
                    </div>
                    <div className="col-4 d-flex align-items-center">
                        <div className="address bg-secondary border rounded me-2" style={{ height: '70px', width: '70px' }}></div>
                        <div className="caption">
                            <h5 className='m-0 p-0'>Email</h5>
                            <p className='m-0 p-0'>Bekasi, Jawa Barat</p>
                        </div>
                    </div>
                </div>
                <hr className='border mt-5'></hr>
                <div className="row mt-5">
                    <div className="col-12 d-flex justify-content-center gap-4">
                        <div style={{height: '40px', width:'40px' }} className='d-flex align-items-center justify-content-center bg-light'><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></div>
                        <div style={{height: '40px', width:'40px' }} className='d-flex align-items-center justify-content-center bg-light'><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></div>
                        <div style={{height: '40px', width:'40px' }} className='d-flex align-items-center justify-content-center bg-light'><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></div>
                        
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