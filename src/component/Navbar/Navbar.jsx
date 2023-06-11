import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import profile from '../../assets/profile/profile.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRightFromBracket, faUser } from '@fortawesome/free-solid-svg-icons'
import { useGetUserProfileQuery } from '../../features/auth/authApi'
import { useDispatch } from 'react-redux'
import { logout } from '../../app/reducer/authSlice'
import Swal from 'sweetalert2'

const Navbar = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [token, setToken] = useState('')
    const {data: user} = useGetUserProfileQuery()

    useEffect(() => {
        setToken(localStorage.getItem('token'))
    }, [])

    const logoutHandler = async (e) => {
        Swal.fire({
          title: 'Are you sure?',
          text: "You wanna logout?",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Logout'
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire(
              'Logout',
              'success'
            )
            dispatch(logout())
            navigate('/login')
          }
        })
        
      };


    return (

        <>
            {token === null || '' ?
                <nav class="navbar navbar-expand-lg bg-body-tertiary ">
                    <div class="container">
                        <a class="navbar-brand d-lg-none" href="#">LetsBUY!</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav mb-2 mb-lg-0 justify-content-between w-100 align-items-center __nav-aim">
                                <li>
                                    <a class="navbar-brand d-none d-lg-block" aria-current="page" href="#">LetsBUY!</a>
                                </li>
                                <li>
                                    <div className='no-link d-flex align-items-center text-light'>
                                        <Link to={'/login'} className='btn btn-salmon me-2 text-light'>Login</Link>
                                        <Link to={'/register'} className='btn btn-salmon text-light'>Register</Link>

                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                :

                <nav class="navbar navbar-expand-lg bg-body-tertiary ">
                    <div class="container">
                        <a class="navbar-brand d-lg-none" href="#">LetsBUY!</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav mb-2 mb-lg-0 justify-content-between w-100 align-items-center __nav-aim">
                                <li>
                                    <a class="navbar-brand d-none d-lg-block" aria-current="page" href="#">LetsBUY!</a>
                                </li>
                                <li className='me-auto ms-4'>
                                    <Link to={'/'} className=" no-link m-0 p-0" href="#">Home</Link>
                                </li>
                                <li>
                                    <div className='no-link d-flex align-items-center'>
                                        <p className='p-0 m-0 pe-3'>{user?.fullname}</p>

                                        <div class="dropdown">
                                            {/* <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"> */}
                                            <img src={profile} alt="" style={{ width: '40px', height: '40px', cursor: 'pointer' }} className='border rounded-circle dropdown-toggle' data-bs-toggle="dropdown" aria-expanded="true" />
                                            {/* </button> */}
                                            <ul class="dropdown-menu dropdown-menu-end">
                                                <li>
                                                    <Link className='dropdown-item no-link' to={'/profile'}><span className='pe-2 '>Profile</span><FontAwesomeIcon icon={faUser}></FontAwesomeIcon></Link>
                                                </li>
                                                <li>
                                                    <Link className='dropdown-item no-link' onClick={logoutHandler}><span className='pe-2 '>Logout</span><FontAwesomeIcon icon={faArrowRightFromBracket}></FontAwesomeIcon></Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            }
        </>
    )
}

export default Navbar