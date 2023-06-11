import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useCreateProductMutation } from '../../features/product/productApi';
import { showLoading, successLoading, failedLoading } from '../../common/loadingHandler';
import Swal from 'sweetalert2';

function ModalCreate() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [createProduct, {isLoading, isSuccess, isError, error}] = useCreateProductMutation()
    const [product, setProduct] = useState({
        name: '',
        stock: '',
        buy_price: '',
        sell_price: '',
        photo: ''
    })


    const changeProduct = (e) => {
        setProduct(prev => {
            return {
                ...prev,
                [e.target.name]: e.target.value,
            };
        })
    }

    const submitProduct = async (e) => {
        e.preventDefault();
        const formData = new FormData()
        for (let attr in product) {
            formData.append(attr, product[attr])
        }
        await createProduct(formData);
    };

    useEffect(() => {
        if (isLoading) {
            showLoading('Please Wait....')
        }

        if (isSuccess) {
            Swal.fire({
                title: 'Success added product!',
                icon: 'success',
            });
            setProduct({
                name: '',
                stock: '',
                buy_price: '',
                sell_price: '',
                photo: '',
            })
        }

        if (isError) {
            failedLoading(error?.data?.message)
        }

    }, [isLoading, isSuccess, isError])

    return (

        <>
            <Button variant="success" onClick={handleShow}>
                Add Product
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div class="mb-3">
                        <label for="name_product" class="form-label">Name Product</label>
                        <input type="text" class="form-control" id="name_product" onChange={changeProduct} value={product?.name} name={'name'} />
                    </div>
                    <div class="mb-3">
                        <label for="stock" class="form-label">Stock</label>
                        <input type="number" class="form-control" id="stock" onChange={changeProduct} value={product?.stock} name={'stock'} />
                    </div>
                    <div class="mb-3">
                        <label for="buyprice" class="form-label">Buy Price</label>
                        <input type="number" class="form-control" id="buyprice" onChange={changeProduct} value={product?.buy_price} name={'buy_price'} />
                    </div>
                    <div class="mb-3">
                        <label for="sellprice" class="form-label">Sell Price</label>
                        <input type="number" class="form-control" id="sellprice" onChange={changeProduct} value={product?.sell_price} name={'sell_price'} />
                    </div>
                    <div class="mb-3">
                        <label for="photo" class="form-label">Photo Product</label>
                        <input class="form-control" type="file" id="photo" name='photo' onChange={(e) =>
                            setProduct((prev) => ({
                                ...prev,
                                photo: e.target.files[0],
                            }))} />
                    </div>
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
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={(e) => {submitProduct(e); handleClose(e)}}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalCreate;