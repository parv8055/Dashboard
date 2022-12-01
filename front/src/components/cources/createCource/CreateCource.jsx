import React from 'react'
import './CreateCource.css'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom"

import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const CreateCource = () => {
    const navigate = useNavigate();

    return (
        <div className='Main'>
            <div className='main_div'>

                <ThemeProvider>
                    <CssBaseline />
                    <AppBar
                        position="absolute"
                        color="default"
                        elevation={0}
                        sx={{
                            position: 'relative',
                            borderBottom: (t) => `1px solid ${t.palette.divider}`,
                        }}
                    >
                        <Toolbar>
                            <Typography variant="h6" color="inherit" noWrap>
                                Company name
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
                        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                            <Typography component="h1" variant="h4" align="center">
                                Checkout
                            </Typography>
                            <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
                                {steps.map((label) => (
                                    <Step key={label}>
                                        <StepLabel>{label}</StepLabel>
                                    </Step>
                                ))}
                            </Stepper>
                            {activeStep === steps.length ? (
                                <React.Fragment>
                                    <Typography variant="h5" gutterBottom>
                                        Thank you for your order.
                                    </Typography>
                                    <Typography variant="subtitle1">
                                        Your order number is #2001539. We have emailed your order
                                        confirmation, and will send you an update when your order has
                                        shipped.
                                    </Typography>
                                </React.Fragment>
                            ) : (
                                <React.Fragment>
                                    {getStepContent(activeStep)}
                                    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                        {activeStep !== 0 && (
                                            <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                                                Back
                                            </Button>
                                        )}

                                        <Button
                                            variant="contained"
                                            onClick={handleNext}
                                            sx={{ mt: 3, ml: 1 }}
                                        >
                                            {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                                        </Button>
                                    </Box>
                                </React.Fragment>
                            )}
                        </Paper>
                        <Copyright />
                    </Container>
                </ThemeProvider>

                {/* <form action="">
                    <div className='form_div'>
                        <div className='select_div'>
                            <label>Category</label>
                            <select>
                                <option value="">Select Category</option>
                                <option value="Mathematics">Mathematics</option>
                                <option value="Geography">Geography</option>
                                <option value="UPSC">UPSC</option>
                                <option value="Railway">Railway</option>
                            </select>
                        </div>
                        <div className='select_div'>
                            <label>Sub-Category</label>
                            <select>
                                <option value="">Select Sub-Category</option>
                            </select>
                        </div>
                    </div>
                    <div className='title_div'>
                        <div className='title'>
                            <label>Title</label>
                            <input type="text" placeholder='Title' />
                        </div>
                    </div>


                    <div className='price'>
                        <div className='price_div'>
                            <label>Price</label>
                            <input type="text" placeholder='Price' />
                        </div>
                        <div className='price_div'>
                            <label>MRP</label>
                            <input type="text" placeholder='MRP' />
                        </div>
                        <div className='price_div'>
                            <label>Select Image</label>
                            <input type="text" placeholder='Select Image' />
                        </div>
                    </div>


                    <div className='desc_div'>
                        <div className='desc'>
                            <label>Description</label>
                            <input type="text" />
                        </div>
                    </div>
                    <div className='button'>
                        <Stack direction="row" spacing={2}>
                            <Button variant="contained" color="primary" onClick={() => { navigate("/cources") }}>
                                Create Cource
                            </Button>
                        </Stack>
                    </div>
                </form> */}
            </div>
        </div>
    )
}

export default CreateCource