import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

const Layout: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-100 font-sans flex flex-col">
            <Header />
            <main className="container mx-auto p-4 flex-grow flex flex-col gap-4">
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;
