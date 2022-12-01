import {combineReducers} from 'redux'

const testReducers=(tests=[],action)=>{
    switch(action.type){
        case "ALL_TEST":
            return action.payload;
            case "CREATE_TEST":
            return [...tests,action.payload];
            case "UPDATE_TEST":
            return tests.map((test)=>test._id === action.payload._id ? action.payload:test);
            case "DELETE_TEST":
                return tests.filter((test)=>test._id !==action.payload);
            default:
            return tests;
    }
}

const courceReducers=(cources=[],action)=>{
    switch(action.type){
        case "ALL_COURCE":
            return action.payload;
            case "CREATE_COURCE":
            return [...cources,action.payload];
            case "UPDATE_COURCE":
            return cources.map((cource)=>cource._id === action.payload._id ? action.payload:cource);
            case "DELETE_COURCE":
                return cources.filter((cource)=>cource._id !==action.payload);
            default:
            return cources;
    }
}

export default combineReducers({
    tests:testReducers,
    cources:courceReducers
})