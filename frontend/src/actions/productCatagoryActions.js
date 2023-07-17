import axios from 'axios';
import {
    PRODUCT_CATAGORY_LIST_REQUEST,
    PRODUCT_CATAGORY_LIST_SUCCESS,
    PRODUCT_CATAGORY_LIST_FAIL,
    PRODUCT_CATAGORY_DETAILS_REQUEST,
    PRODUCT_CATAGORY_DETAILS_SUCCESS,
    PRODUCT_CATAGORY_DETAILS_FAIL,
} from '../constants/productCatagoryConstants';

export const listProductCatagories = () => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_CATAGORY_LIST_REQUEST });

        const { data } = await axios.get('/api/productCatagories');

        dispatch({
            type: PRODUCT_CATAGORY_LIST_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: PRODUCT_CATAGORY_LIST_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const listProductCatagoryDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_CATAGORY_DETAILS_REQUEST });

        const { data } = await axios.get(`/api/productCatagories/${id}`);

        dispatch({
            type: PRODUCT_CATAGORY_DETAILS_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: PRODUCT_CATAGORY_DETAILS_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};
