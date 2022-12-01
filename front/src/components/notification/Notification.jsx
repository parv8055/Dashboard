import React from 'react'
import { useNavigate } from 'react-router-dom'
import './notification.css'
import NotificationTable from './notificationTable/NotificationTable'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Notification = () => {
    const navigate = useNavigate()
    return (
        <div className='Main'>
            <h1>Notification</h1>
            <Stack direction="row" spacing={2}>
                <Button variant="contained" color="primary" onClick={() => { navigate('/testseries/CreateNoti') }}>
                    Create
                </Button>
            </Stack>
            <NotificationTable />
        </div>
    )
}

export default Notification