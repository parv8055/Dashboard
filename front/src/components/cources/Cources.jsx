import React from 'react'
import './cources.css'
import CCard from './tcard/CCard'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom"


const Cources = () => {
    const navigate = useNavigate();

    return (
        <div className='Main'>
            <h1>Products</h1>
            <Stack direction="row" spacing={2}>
                <Button variant="contained" color="primary" onClick={() => { navigate("/cources/CreateCource") }}>
                    Create Cource
                </Button>
            </Stack>
            <div className='Main_div'>
                <CCard />
                <CCard />
                <CCard />
            </div>
        </div>
    )
}

export default Cources