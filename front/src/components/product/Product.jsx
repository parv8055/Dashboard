import React from 'react'
import './product.css'
import { ProductCard } from './productcard/ProductCard'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const Product = () => {
    const navigate = useNavigate()
    return (
        <div className='Main'>
            <h1>Products</h1>
            <Stack direction="row" spacing={2}>
                <Button variant="contained" color="primary" onClick={() => { navigate('') }}>
                    Create New Product
                </Button>
            </Stack>
            <div className='Main_div'>
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </div>
    )
}

export default Product