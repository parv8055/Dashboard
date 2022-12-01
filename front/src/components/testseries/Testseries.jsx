import React from 'react'
import TCard from './tcard/TCard'
import './testseries.css'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';


const Testseries = () => {
    const navigate = useNavigate()
    return (
        <div className='Main'>
            <h1>Products</h1>
            <Stack direction="row" spacing={2}>
                <Button variant="contained" color="primary" onClick={() => { navigate('/testseries/CreateTest') }}>
                    Create Test Series
                </Button>
            </Stack>
            <div className='Main_div'>
                <TCard />
                <TCard />
                <TCard />
            </div>
        </div>
    )
}

export default Testseries