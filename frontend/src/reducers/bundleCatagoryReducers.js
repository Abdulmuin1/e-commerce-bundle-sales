import {
    BUNDLE_CATAGORY_LIST_REQUEST,
    BUNDLE_CATAGORY_LIST_SUCCESS,
    BUNDLE_CATAGORY_LIST_FAIL,
} from '../constants/bundleCatagoryConstants';

export const bundleCatagoryListReducer = (state = { catagories: [] }, action) => {
    switch (action.type) {
        case BUNDLE_CATAGORY_LIST_REQUEST:
            return { loading: true, catagories: [] };
        case BUNDLE_CATAGORY_LIST_SUCCESS:
            return {
                loading: false,
                catagories: action.payload,
            };
        case BUNDLE_CATAGORY_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};
