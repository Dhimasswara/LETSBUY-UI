import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useUserLoginMutation } from '../../features/auth/authApi'
import { setCredentials } from '../../app/reducer/authSlice'
import Swal from 'sweetalert2'

const Login = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [userLogin, { isLoading, isError, isSuccess, error }] = useUserLoginMutation()

    const [data, setData] = useState({
        email: "",
        password: "",
    });

    const changeHandler = (e) => {
        setData((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value,
            };
        });
    };

    const directPath = () => {
        return navigate('/')
    }

    const loginHandler = async (e) => {
        e.preventDefault();
        const res = await userLogin(data);
        dispatch(setCredentials({ user: res?.data?.data , token: res?.data?.token }));
    };

    useEffect(() => {
        if (isSuccess) {
            Swal.fire({
                title: 'Login Successfull',
                icon: 'success',
            });
            directPath();
        }
    }, [isSuccess]);



    return (
        <div className="container">
            <div class="min-vh-100 d-flex justify-content-center align-items-center ">
                <div className="row w-100 justify-content-center">
                    <div className="col-xl-3 col-6">
                        <h4 className='mb-5 border-bottom pb-2 text-center'>Login</h4>
                        <form onSubmit={loginHandler} >
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
                                <label for="exampleInputEmail1" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={data?.email} onChange={changeHandler}/>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" name='password' value={data?.password} onChange={changeHandler}/>
                            </div>
                            <div className="d-grid mb-3">
                                <button type="submit" class="btn btn-light btn-salmon text-light">Login</button>
                            </div>
                            <div className="register">
                                <p>Don't have account? <Link to={'/register'} className="no-link no-link-salmon">Register</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login