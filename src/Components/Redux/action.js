
import {ADD_MOVIE,DELET_MOVIE} from './action-type'
export const addMovie =(data) => { 
    return {
    type:ADD_MOVIE,
    payload:data
}
}
export const deletMovie =(id) => {
    return {
        type : DELET_MOVIE,
        payload : id
    }
}