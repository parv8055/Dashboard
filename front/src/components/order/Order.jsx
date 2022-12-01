import React from 'react'
import OrderTable from './orderTable/OrderTable'
import './order.css'

const order = () => {
    return (
        <div className='Main'>
            <h1>Orders</h1>
            <OrderTable />
        </div>
    )
}

export default order
