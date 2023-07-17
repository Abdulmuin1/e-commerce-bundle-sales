import axios from 'axios';
import {
    BUNDLE_CATAGORY_LIST_REQUEST,
    BUNDLE_CATAGORY_LIST_SUCCESS,
    BUNDLE_CATAGORY_LIST_FAIL,
} from '../constants/bundleCatagoryConstants';

export const listBundleCatagories = () => async (dispatch) => {
    try {
        dispatch({ type: BUNDLE_CATAGORY_LIST_REQUEST });

        const { data } = await axios.get('/api/bundleCatagories');

        dispatch({
            type: BUNDLE_CATAGORY_LIST_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: BUNDLE_CATAGORY_LIST_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};
