import {ADD_MOVIE,DELET_MOVIE} from './action-type'
import Data from '../../Data'

const initialState = {
    Dataa:Data
}

export const dataReducer = (state=initialState,action) => {
    switch (action.type) {
        case ADD_MOVIE :return {
            ...state,
            Dataa : [...state.Dataa,action.payload]
        }
        case DELET_MOVIE: return {
            ...state , 
            Dataa : state.Dataa.filter(el=>el.id != action.payload)

        }
            
        default:return state
    }

}