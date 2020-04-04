import {GET_LOGS,SET_LOADING,LOGS_ERROR,ADD_LOG} from './types'



// get logs from database
export const getLogs = () => {
    return async (dispatch) =>{
        try {
            setLoading();
            const res = await fetch('http://localhost:5000/logs');
            const data = await res.json();

            dispatch({
                type: GET_LOGS,
                payload:data
            });
        } catch (error) {
            dispatch({
                type:LOGS_ERROR,
                payload:error.response.data
            })
            
        }
    };
}
export const addLog = (log) => {
    return async (dispatch) =>{
        try {
            setLoading();
            const res = await fetch('http://localhost:5000/logs',{
                method:'POST',
                body: JSON.stringify(log),
                headers:{
                    'Content-type':'application/json'
                }
            });
            const data = await res.json();

            dispatch({
                type: ADD_LOG,
                payload:data
            });
        } catch (error) {
            dispatch({
                type:LOGS_ERROR,
                payload:error.response.data
            })
            
        }
    };
}



//set loading to true
export const setLoading = () => {
    return {
        type:SET_LOADING
    }
}