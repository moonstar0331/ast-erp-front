import React from 'react';
import { Link } from 'react-router-dom';
import type { SidebarLink } from '../types';

type SidebarProps = {
    title: string;
    links: SidebarLink[];
};

const Sidebar: React.FC<SidebarProps> = ({ title, links }) => {
    return (
        <aside className="w-60 flex-shrink-0">
            <div className="bg-white p-4 rounded-lg border h-full">
                <h2 className="text-xl font-bold mb-4">{title}</h2>
                <ul>
                    {links.map((link) => (
                        <li key={link.name}>
                            <Link to={link.href} className={`block py-2 px-3 rounded-md text-sm font-medium ${link.active ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-100 text-gray-600'}`}>
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    );
};

export default Sidebar;
