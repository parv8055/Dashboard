import React from 'react'
import './pcard.css'
import p from '../../../imgs/i.png'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';

export const ProductCard = () => {
    return (
        <div className='container'>
            <div className='image'>
                <img src={p} alt="" />
            </div>
            <div className='details'>
                <div className='details_div'>
                    <span>Rajasthan CET - Graduation Level - Test 2</span>
                    <span>Price : 19 || Date : 03-Apr-2021</span>
                    <span>Type : E-Book</span>
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
