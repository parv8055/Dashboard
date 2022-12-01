import React from 'react'
import './tcard.css'
import p from '../../../imgs/cet.png'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';


const ProductCard = () => {
    return (
        <div className='container'>
            <div className='image'>
                <img src={p} alt="" />
            </div>
            <div className='details'>
                <div className='details_div'>
                    <span>Rajasthan CET - Graduation Level - Test 2</span>
                    <span>Price : 20.00 || Date : 15-Nov-2022</span>
                    <span>Test Type : SingleChoice</span>
                </div>
                <div className='details_button'>
                    <Switch />
                    <Stack direction="row" spacing={2}>
                        <Button variant="outlined" color="primary">
                            Edit
                        </Button>
                        <Button variant="outlined" color="success">
                            Add To Playlist
                        </Button>

                        <Button variant="outlined" color="error">
                            Delete
                        </Button>
                    </Stack>
                </div>
            </div>
        </div>
    )
}

export default ProductCard