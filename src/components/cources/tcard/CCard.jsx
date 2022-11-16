import React from 'react'
import './ccard.css'
import p from '../../../imgs/rsm.png'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';


const CCard = () => {
    return (
        <div className='container'>
            <div className='image'>
                <img src={p} alt="" />
            </div>
            <div className='details'>
                <div className='details_div'>
                    <span>RSMSSB LDC (Lower Division Clerk) - TEST SERIES</span>
                    <span>Price : 99.00 || Date : 10-Nov-2022</span>
                    <span>RSMSSB LDC - Test Series - 10 Full Length Test ( Based on Latest Syllabus and Exam Pattern ) - Each Test has Single Correct 150 Questions. - Test Duration - 3 Hrs.</span>
                </div>
                <div className='details_button'>
                    <Switch />
                    <Stack direction="row" spacing={2}>
                        <Button variant="outlined" color="primary">
                            Edit
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

export default CCard