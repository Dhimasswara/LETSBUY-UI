import React, { useState } from 'react'
import Layout from '../../component/Layout/Layout'
import display1 from '../../assets/product/display1.jpg'
import display2 from '../../assets/product/display2.jpg'
import display3 from '../../assets/product/display3.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { useGetAllProductQuery } from '../../features/product/productApi'
import { FormatRupiah } from '@arismun/format-rupiah'
import { useNavigate } from 'react-router-dom'
import Pagination from '../../component/Pagination/Pagination'


const LandingPage = () => {

    const navigate = useNavigate();
    const [search, setSearch] = useState('')
    const {data: product} = useGetAllProductQuery({search})
    
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(8);

    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = product?.slice(firstPostIndex, lastPostIndex);

    // console.log(currentPosts);




    return (
        <Layout>

            <section>
                <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner __carousel-custom">
                        <div class="carousel-item active">
                            <img src={display1} class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Green Sofa</h5>
                                <p>Made of soft material for comfort when sitting.</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src={display2} class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Cream Sofa</h5>
                                <p>Materials made from the best fabrics for family comfort when together.</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src={display3} class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Brown Sofa</h5>
                                <p>The best leather used as a sofa adds comfort to sitting with the family.</p>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </section>

            <section className='mt-5'>
                <div className="display-product">
                    <div className="header d-flex justify-content-between">
                        <span>
                            <h3>New's Product</h3>
                            <p className='p-0 m-0'>newest product from extra feels</p>
                        </span>
                        <span className='d-flex align-items-end'>
                            <form className="d-flex " role="search">
                                <input className="form-control me-2 rounded" type="search" placeholder="search" aria-label="Search" onChange={(e) => setSearch(e.target.value)}
                                />
                            </form>
                        </span>
                    </div>

                    <div className="cardss mt-5">
                        <div className="row">
                        {/* {currentPosts?.length > 0 ? 
                        <> */}
                            {currentPosts?.map(p => (
                            <div className="col-3 mb-3">
                                <div className="card __card-custom">
                                    <img src={p?.photo} alt="" />
                                    <div className="rate ps-2 pt-3 pb-2">
                                        <span><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></span>
                                        <span><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></span>
                                        <span><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></span>
                                        <span><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></span>
                                        <span><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></span>
                                    </div>
                                    <p className='ps-2 p-0 m-0 '>{p?.name}</p>
                                    <p className='ps-2 p-0 m-0 fw-bolder pt-2'> <FormatRupiah value={p?.sell_price}></FormatRupiah> </p>
                                </div>
                            </div>
                            ))}

                            <Pagination
                                totalPosts={product?.length}
                                postsPerPage={postsPerPage}
                                setCurrentPage={setCurrentPage}
                                currentPage={currentPage}
                            />
                            {/* </> */}

                            {/* :  */}
                            {/* <div className="text-center">No one products</div> */}
                            
                        {/* } */}

                        </div>
                    </div>
                </div>
            </section>

            

            
        </Layout>
    )
}

export default LandingPage