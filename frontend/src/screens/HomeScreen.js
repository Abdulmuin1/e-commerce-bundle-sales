import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
// import bundleCatagories from '../bundleCatagories';
import BundleCatagory from '../components/BundleCatagory';
import { listBundleCatagories } from '../actions/bundleCatagoryActions';
// import axios from 'axios'
import Loader from '../components/Loader';
import Message from '../components/Message';

const HomeScreen = () => {
   
    const dispatch = useDispatch();
    const bundleCatagoryList = useSelector((state) => state.bundleCatagoryList);
    const { loading, error, catagories } = bundleCatagoryList;
    // const [bundleCatagories , setBundleCatagories] = useState([])

    useEffect(() => {
        // const fetchBundleCatagories = async () => {
        //     const {data} = await axios.get('/api/bundleCatagories')
        //     setBundleCatagories(data)
        // }

        // fetchBundleCatagories()
        
        dispatch(listBundleCatagories());
    }, [dispatch]);

    const bundleCatagories = catagories;

    return (
        <>
            {loading ? (
                <Loader />
            ) : error ? (
                <Message variant={'danger'}>{error}</Message>
            ) : (
                <>
                    {bundleCatagories.map((catagory) => (
                        <BundleCatagory
                            key={catagory._id}
                            catagory={catagory}
                        />
                    ))}
                </>
            )}
        </>
    );
};

export default HomeScreen;
