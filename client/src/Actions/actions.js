import * as api from '../Apis/api'

export const action = ()=> async (dispatch)=>{
    try {
        const {data} = await api.fetchAll();
        dispatch({ type:'ALLPOST', payload:data});
        
    } catch (error) {
        console.log(error.message);
    }
}