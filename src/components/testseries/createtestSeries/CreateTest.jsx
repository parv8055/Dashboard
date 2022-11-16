import React from 'react'
import './CreateTest.css'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom"

const CreateTest = () => {
    const navigate = useNavigate();

    return (
        <div className='Main'>
            <div className='main_div'>
                <form action="">
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
                            <label>Test Type</label>
                            <input type="text" placeholder='Test Type' />
                        </div>
                        <div className='price_div'>
                            <label>
                                Select Test Font</label>
                            <input type="text" placeholder='Select Test Font' />
                        </div>
                        <div className='price_div'>
                            <label>Price</label>
                            <input type="text" placeholder='MRP' />
                        </div>
                        <div className='price_div'>
                            <label>MRP</label>
                            <input type="text" placeholder='Select Image' />
                        </div>
                    </div>


                    <div className='desc_div'>
                        <div className='desc'>
                            <label>Description</label>
                            <input type="text" />
                        </div>
                    </div>


                    <div className='pricee'>
                        <div className='pricee_div'>
                            <label>Test Type</label>
                            <input type="text" placeholder='Test Type' />
                        </div>
                        <div className='pricee_div'>
                            <label>
                                Select Test Font</label>
                            <input type="text" placeholder='Select Test Font' />
                        </div>
                    </div>

                    <div className='button'>
                        <Stack direction="row" spacing={2}>
                            <Button variant="contained" color="primary" onClick={() => { navigate("/testseries") }}>
                                Create Test Series
                            </Button>
                        </Stack>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateTest