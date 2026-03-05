import React from 'react';
import { Link } from 'react-router-dom';
import type { SidebarLink } from '../types';

type SidebarProps = {
    title: string;
    links: SidebarLink[];
    children?: React.ReactNode;
};

const Sidebar: React.FC<SidebarProps> = ({ title, links, children }) => {
    return (
        <aside className="w-60 flex-shrink-0">
            <div className="bg-white p-4 rounded-lg border h-full flex flex-col">
                <h2 className="text-xl font-bold mb-4">{title}</h2>
                <ul className="mb-6">
                    {links.map((link) => (
                        <li key={link.name}>
                            <Link to={link.href} className={`flex items-center gap-3 py-2 px-3 rounded-md text-sm font-medium ${link.active ? 'bg-blue-600 text-white' : 'hover:bg-gray-100 text-gray-600'}`}>
                                {link.icon && <span className="text-lg">{link.icon}</span>}
                                <span>{link.name}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
                {children}
            </div>
        </aside>
    );
};

export default Sidebar;
