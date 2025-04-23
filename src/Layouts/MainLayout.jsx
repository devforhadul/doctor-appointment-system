import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Outlet, useLocation } from 'react-router';
import Spinner from '../Components/ui/Spinner';

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

            <Navbar />
            <div>
                {loading && <Spinner />}
                {!loading && <Outlet />}
            </div>
            <Footer />

        </>
    );
};

export default MainLayout;