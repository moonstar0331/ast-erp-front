import { Link, useNavigate } from 'react-router-dom';
import { useMenuContext } from '@/context/MenuContext';
import { useMenu } from '@/hooks/useMenu';
import { useEffect, useState } from 'react';
import { getCookie } from '@/utils/cookie';
import { getUserInfo, type UserInfo } from '@/api/auth';

export default function Header() {
    const navigate = useNavigate();
    const { menuTree: menuItems } = useMenuContext();
    const { currentRootMenu } = useMenu();
    const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

    useEffect(() => {
        const userUuid = getCookie('userUuid');
        if (userUuid) {
            getUserInfo(userUuid)
                .then(setUserInfo)
                .catch(err => console.error('Failed to fetch user info:', err));
        }
    }, []);

    return (
        <header className="bg-white border-b">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center gap-8">
                        <img src="/image/logo_ast.png" alt="AST Logo" className="h-9 object-contain cursor-pointer" onClick={() => navigate('/dashboard')}/>
                        <nav className="hidden md:flex items-center gap-6 text-base font-semibold text-gray-600">
                            {menuItems.map(item => {
                                const isActive = currentRootMenu?.menuId === item.menuId;
                                return (
                                    <Link
                                        to={item.path || '#'}
                                        key={item.menuId}
                                        className={`hover:text-gray-900 transition-colors ${isActive ? 'text-blue-600 border-b-2 border-blue-600' : ''}`}
                                    >
                                        {item.menuName}
                                    </Link>
                                );
                            })}
                        </nav>
                    </div>
                    <div className="flex items-center gap-4">
                        <input type="text" placeholder="통합검색" className="hidden md:block w-40 h-8 px-2 border rounded-md text-sm" />
                        <div className="flex items-center gap-3 text-sm">
                            <span>☆</span>
                            <span>🔔</span>
                            <span className="font-semibold">{userInfo?.name || '로딩 중...'}</span>
                            <a href="#" className="text-gray-500">한국어</a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
