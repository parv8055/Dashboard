import axios from 'axios'

const url1 = 'http://localhost:5000/courses'
const url2 = 'http://localhost:5000/tests'

export const apiAllCource=()=>axios.get(url1)
export const apiCreateCource=(newCource)=>axios.post(url1,newCource)
export const apiUpdateCource=(id,updateCource)=>axios.patch(`${url1}/${id}`,updateCource)
export const apiDeleteCource=(id)=>axios.delete(`${url1}/${id}`)

export const apiAllTest=()=>axios.get(url2)
export const apiCreateTest=(newTest)=>axios.post(url2,newTest)
export const apiUpdateTest=(id,updateTest)=>axios.patch(`${url2}/${id}`,updateTest)
export const apiDeleteTest=(id)=>axios.delete(`${url2}/${id}`)

