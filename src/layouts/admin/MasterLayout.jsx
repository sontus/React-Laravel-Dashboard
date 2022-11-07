import React from 'react';

import '../../assets/admin/css/styles.css';
import '../../assets/admin/js/scripts';


import Footer from './Footer';
import Navbar from './Navbar';
import Sidebar from './Sidebar';


const MasterLayout = () => {
    return (
        <div className='sb-nav-fixed'>
            {/* Navbar */}
            <Navbar/>
            <div id="layoutSidenav">
                <div id="layoutSidenav_nav">
                    {/* Sidebar */}
                    <Sidebar/>
                </div>
                <div id="layoutSidenav_content">

                    <main>
                        Master File
                    </main>
                    {/* Footer */}
                    <Footer/>
                </div>
            </div>
        </div>
    );
};

export default MasterLayout;