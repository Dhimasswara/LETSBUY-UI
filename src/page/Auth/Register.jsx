import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useUserRegisterMutation } from '../../features/auth/authApi'
import { useNavigate } from 'react-router-dom'
import { showLoading, failedLoading, successLoading } from '../../common/loadingHandler'
import Swal from 'sweetalert2'

const Register = () => {

    
    const navigate = useNavigate()
    const [userRegister, { isSuccess, isLoading, isError, error }] = useUserRegisterMutation()
    const [data, setData] = useState({
        fullname: '',
        email: '',
        password: ''
    })
    const handleChange = (e) => {
        setData(prev => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        await userRegister(data)
    }
    const directPath = () => {
        return navigate('/login')
    }

    useEffect(() => {
        if (isLoading) {
            showLoading('Please Wait....')
        }

        if (isSuccess) {
            Swal.fire({
                title: 'Register Success',
                icon: 'success',
            });
            setData({
                fullname: '',
                email: '',
                password: ''
            })
            directPath();
        }

        if (isError) {
            failedLoading(error?.data?.message)
            setData(prev => {
                return {
                    ...prev,
                    password: ''
                }
            })
        }

    }, [isLoading, isSuccess, isError])

    return (
        <div className="container">
            <div class="min-vh-100 d-flex justify-content-center align-items-center ">
                <div className="row w-100 justify-content-center">
                    <div className="col-xl-3 col-6">
                        <h4 className='mb-5 border-bottom pb-2 text-center'>Register</h4>
                        <form onSubmit={handleSubmit}>
                            {error && (
                                <div
                                    className="alert alert-danger alert-dismissible fade show"
                                    role="alert"
                                >
                                    {error?.data?.message}
                                    <button
                                        type="button"
                                        className="btn-close"
                                        data-bs-dismiss="alert"
                                        aria-label="Close"
                                    ></button>
                                </div>
                            )}
                            <div class="mb-3">
                                <label for="fullname" class="form-label">Fullname</label>
                                <input type="text" class="form-control" id="fullname" value={data?.fullname} onChange={handleChange} name='fullname'/>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={data?.email} onChange={handleChange}/>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" name='password' value={data?.password} onChange={handleChange}/>
                            </div>
                            <div className="d-grid mb-3">
                                <button type="submit" class="btn btn-light btn-salmon text-light">Register</button>
                            </div>
                            <div className="register">
                                <p>Do you have account? <Link to={'/login'} className="no-link no-link-salmon">Login</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register