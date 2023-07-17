import {
    PRODUCT_CATAGORY_LIST_REQUEST,
    PRODUCT_CATAGORY_LIST_SUCCESS,
    PRODUCT_CATAGORY_LIST_FAIL,
    PRODUCT_CATAGORY_DETAILS_REQUEST,
    PRODUCT_CATAGORY_DETAILS_SUCCESS,
    PRODUCT_CATAGORY_DETAILS_FAIL,
} from '../constants/productCatagoryConstants';

export const productCatagoryListReducer = (
    state = { catagories: [] },
    action
) => {
    switch (action.type) {
        case PRODUCT_CATAGORY_LIST_REQUEST:
            return { loading: true, catagories: [] };
        case PRODUCT_CATAGORY_LIST_SUCCESS:
            return {
                loading: false,
                catagories: action.payload,
            };
        case PRODUCT_CATAGORY_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const productCatagoryDetailsReducer =  (
    state = { catagory: {} },
    action
) => {
    switch (action.type) {
        case PRODUCT_CATAGORY_DETAILS_REQUEST:
            return { loading: true, ...state };
        case PRODUCT_CATAGORY_DETAILS_SUCCESS:
            return {
                loading: false,
                catagory: action.payload,
            };
        case PRODUCT_CATAGORY_DETAILS_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};