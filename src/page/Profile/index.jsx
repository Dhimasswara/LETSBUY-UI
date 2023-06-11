import React, { useState } from 'react'
import Layout from '../../component/Layout/Layout'
import DataTable from 'react-data-table-component';
import { useGetAllProductQuery } from '../../features/product/productApi';
import ModalUpdate from '../../component/ModalUpdate/ModalUpdate';
import ModalDelete from '../../component/ModalDelete/ModalDelete';
import ModalCreate from '../../component/ModalCreate/ModalCreate';
import { FormatRupiah } from '@arismun/format-rupiah';


const Profile = () => {

    const {data} = useGetAllProductQuery({})

    const columns = [
        {
            name: 'Name',
            selector: row => row.name,
            sortable: true,
        },
        {
            name: 'Stock',
            selector: row => row.stock,
            sortable: true,
        },
        {
            name: 'Buy Price',
            selector: row => <FormatRupiah value={row?.buy_price}/>,
            sortable: true,
        },
        {
            name: 'Sell Price',
            selector: row => <FormatRupiah value={row?.sell_price}/>,
            sortable: true,
        },
        {
            name: 'Photo',
            selector: row => <img src={row.photo} className='my-2' style={{width: '50px', height:'50px'}}></img>,
            sortable: true,
        },
        {
            name: 'Action',
            selector: row => 
            <div className="action gap-2 d-flex">
              <ModalUpdate data={row?.id_products}/>
              <ModalDelete data={row?.id_products}/>
            </div>,
        },
    ];


    return (
        <Layout>
            <div className="mt-5 d-flex justify-content-between">
                <div className="header">
                    <h3>My Product</h3>
                </div>
                <div className="action">
                    <ModalCreate/>
                </div>
            </div>

            <div className="table-product border rounded mt-3">
            <DataTable
                columns={columns}
                data={data}
            />
            </div>
        </Layout>
    )
}

export default Profile