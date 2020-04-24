import {
   GET_TECHS,
   ADD_TECH,
   DELETE_TECH,
   SET_LOADING,
   TECHS_ERROR,
   BOOTY
    }from './types'



  export const getTechs = () => {
    return async (dispatch) =>{
        try {
            setLoading();
            const res = await fetch('http://localhost:5000/techs');
            const data = await res.json();
            dispatch({
                type:GET_TECHS,
                payload:data
            });


        } catch (error) {
            dispatch({
                type:TECHS_ERROR,
                payload:error.response.statusText
            })
            
        }
    };
}
export const addTech = (tech) => {
    return async (dispatch) =>{
        try {
            setLoading()
        
            const res = await fetch('http://localhost:5000/techs',{
             method:'POST',
             body: JSON.stringify(tech),
            headers:{
                'Content-type':'application/json'
                }
            });
            
            const data = await res.json();
            dispatch({
                type:ADD_TECH,
                payload:data
            })
        } catch (error) {
            dispatch({
                type:TECHS_ERROR,
                payload:error.response.statusText
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