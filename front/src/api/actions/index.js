import {apiAllTest,apiCreateTest,apiUpdateTest,apiDeleteTest,apiAllCource,apiUpdateCource,apiCreateCource,apiDeleteCource} from '..'

export const allTest=()=>async(dispatch)=>{
   try {
    const {data}=await apiAllTest()
    dispatch({type:"ALL_TEST",payload:data})
   } catch (err) {
    console.log(err)
   }
}

export const createTest=(test)=>async(dispatch)=>{
    try {
     const {data}=await apiCreateTest(test)
     dispatch({type:"CREATE_TEST",payload:data})
    } catch (err) {
     console.log(err)
    }
 }

 export const updateTest=(id,test)=>async(dispatch)=>{
    try {
     const {data}=await apiUpdateTest(id,test)
     dispatch({type:"UPDATE_TEST",payload:data})
    } catch (err) {
     console.log(err)
    }
 }

 export const deleteTest=(id)=>async(dispatch)=>{
    try {
           await apiDeleteTest(id)
     dispatch({type:"DELETE_TEST",payload:id})
    } catch (err) {
     console.log(err)
    }
 }

 export const allCource=()=>async(dispatch)=>{
   try {
    const {data}=await apiAllCource()
    dispatch({type:"ALL_COURCE",payload:data})
   } catch (err) {
    console.log(err)
   }
}

export const createCource=(course)=>async(dispatch)=>{
    try {
     const {data}=await apiCreateCource(course)
     dispatch({type:"CREATE_COURCE",payload:data})
    } catch (err) {
     console.log(err)
    }
 }

 export const updateCource=(id,course)=>async(dispatch)=>{
    try {
     const {data}=await apiUpdateCource(id,course)
     dispatch({type:"UPDATE_COURCE",payload:data})
    } catch (err) {
     console.log(err)
    }
 }

 export const deleteCource=(id)=>async(dispatch)=>{
    try {
           await apiDeleteCource(id)
     dispatch({type:"DELETE_COURCE",payload:id})
    } catch (err) {
     console.log(err)
    }
 }