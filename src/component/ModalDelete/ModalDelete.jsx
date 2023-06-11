import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDeleteProductMutation, useGetProductByIdQuery } from '../../features/product/productApi';
import { showLoading, failedLoading } from '../../common/loadingHandler';
import Swal from 'sweetalert2';

function ModalDelete({data}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const {data: product} = useGetProductByIdQuery(data)
  const [deleteProduct, {isSuccess, isLoading, isError}] = useDeleteProductMutation(data)


  const deleteHandle = () => {
    return deleteProduct(data)
  }

  useEffect(() => {
        if(isLoading) return showLoading('Please wait ...');
        if(isSuccess) {
            Swal.fire({
                title: 'Success delete product',
                icon: 'success',
            })
          }
        if(isError) return failedLoading('Error deleting product');
    }, [isLoading, isSuccess, isError]);
  

  return (
    <>
      <Button variant="primary" className='btn btn-danger' onClick={handleShow}>
        <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Delete <span className='ms-2'>{product?.name}</span></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={deleteHandle}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalDelete;