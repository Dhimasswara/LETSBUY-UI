import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useGetProductByIdQuery, useUpdateProductByIdMutation } from '../../features/product/productApi';
import { showLoading, failedLoading } from '../../common/loadingHandler';
import Swal from 'sweetalert2';

function ModalUpdate({ data }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [updateProduct, { isSuccess: isSuccessUpdate, isLoading, isError, error }] = useUpdateProductByIdMutation()
    const { data: product, isSuccess } = useGetProductByIdQuery(data)

    const [update, setUpdate] = useState({
        name: '',
        stock: '',
        buy_price: '',
        sell_price: '',
        photo: product?.photo,
    });

    useEffect(() => {
        if (isSuccess) {
            setUpdate((prev) => {
                let item = {};
                for (let attr in update) {
                    item = { ...item, [attr]: product[attr] };
                }
                return item;
            });
        }
    }, [isSuccess]);

    const handleChange = (e) => {
        setUpdate(prev => {
            return {
                ...prev,
                [e.target.name]: e.target.value,
            };
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData();
        for (let attr in update) {
            formData.append(attr, update[attr]);
        }
        await updateProduct({ id: data, data: formData });
    }

    useEffect(() => {
        if (isLoading) {
            showLoading('Please Wait....')
        }

        if (isSuccessUpdate) {
            Swal.fire({
                title: 'Success update product!',
                icon: 'success',
            });
        }

        if (isError) {
            failedLoading(error?.data?.message)
        }

    }, [isLoading, isSuccessUpdate, isError])




    return (
        <>
            <Button variant="primary" onClick={handleShow} className='btn btn-primary'>
                <FontAwesomeIcon icon={faPencilAlt}></FontAwesomeIcon>
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>

                        <div class="mb-3">
                            <label for="name_product" class="form-label">Name Product</label>
                            <input type="text" class="form-control" id="name_product" value={update?.name} onChange={handleChange} name={'name'} />
                        </div>
                        <div class="mb-3">
                            <label for="stock" class="form-label">Stock</label>
                            <input type="number" class="form-control" id="stock" value={update?.stock} onChange={handleChange} name={'stock'} />
                        </div>
                        <div class="mb-3">
                            <label for="buyprice" class="form-label">Buy Price</label>
                            <input type="number" class="form-control" id="buyprice" value={update?.buy_price} onChange={handleChange} name={'buy_price'} />
                        </div>
                        <div class="mb-3">
                            <label for="sellprice" class="form-label">Sell Price</label>
                            <input type="number" class="form-control" id="sellprice" value={update?.sell_price} onChange={handleChange} name={'sell_price'} />
                        </div>
                        <div class="mb-3">
                            <label for="photo" class="form-label">Photo Product</label>
                            <input class="form-control" type="file" id="photo" onChange={(e) =>
                                setUpdate((prev) => ({
                                    ...prev,
                                    photo: e.target.files[0],
                                }))} name={'photo'} />
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
                    </form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Close
                    </Button>
                    <form>
                        <Button variant="success" onClick={(e) => { handleSubmit(e); handleClose() }}>
                            Save Changes
                        </Button>
                    </form>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalUpdate