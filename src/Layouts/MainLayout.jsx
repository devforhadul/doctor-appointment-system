import React, { useEffect, useState } from 'react';
import Footer from '../Components/Home/Footer';
import { Outlet, useLocation } from 'react-router';
import Spinner from '../Components/ui/Spinner';
import ScrollToTop from '../Components/ui/ScrollToTop';
import Navbar from '../Components/Home/Navbar';

const MainLayout = () => {

    const [loading, setLoading] = useState(false);
    const location = useLocation();

 

    useEffect(() => {
        setLoading(true);
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 300); // Adjust delay as needed

        return () => clearTimeout(timeout);
    }, [location]);

    return (
        <>
            <ScrollToTop></ScrollToTop>
            <Navbar></Navbar>
            {/* <div className='w-11/12 mx-auto'>
                {loading && <Spinner />}
                {!loading && <Outlet />}
            </div> */}
            <Outlet />
            <Footer />

        </>
    );
};

export default MainLayout;