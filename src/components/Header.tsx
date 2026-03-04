import { Link, useNavigate } from 'react-router-dom';
import { useMenuContext } from '@/context/MenuContext';
import { useMenu } from '@/hooks/useMenu';
import { useEffect, useState, useRef } from 'react';
import { getCookie, eraseCookie } from '@/utils/cookie';
import { getUserInfo, type UserInfo } from '@/api/auth';

export default function Header() {
    const navigate = useNavigate();
    const { menuTree: menuItems } = useMenuContext();
    const { currentRootMenu } = useMenu();
    const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const userMenuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const userUuid = getCookie('userUuid');
        if (userUuid) {
            getUserInfo(userUuid)
                .then(setUserInfo)
                .catch(err => console.error('Failed to fetch user info:', err));
        }
    }, []);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
                setIsUserMenuOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleLogout = () => {
        eraseCookie('userUuid');
        eraseCookie('token');
        navigate('/');
    };

    return (
        <header className="bg-white border-b relative z-50">
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
                            <span className="cursor-pointer hover:text-blue-600">☆</span>
                            <span className="cursor-pointer hover:text-blue-600">🔔</span>
                            
                            {/* User Profile Area */}
                            <div className="relative" ref={userMenuRef}>
                                <div 
                                    className="flex items-center gap-2 cursor-pointer group"
                                    onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                                >
                                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden border border-gray-300">
                                        <span className="text-gray-500 text-sm">👤</span>
                                    </div>
                                    <span className="font-semibold group-hover:text-blue-600">{userInfo?.name || '로딩 중...'}</span>
                                </div>

                                {/* User Context Menu (Modal-like dropdown) */}
                                {isUserMenuOpen && (
                                    <div className="absolute right-0 mt-3 w-52 bg-white border border-gray-200 rounded-md shadow-lg py-1 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                                        <button className="w-full flex items-center gap-4 px-4 py-2.5 text-gray-700 hover:bg-gray-50 text-[15px]">
                                            <span className="text-xl w-6 flex justify-center">👤</span>
                                            <span className="font-medium">사용자정보</span>
                                        </button>
                                        <button className="w-full flex items-center gap-4 px-4 py-2.5 text-gray-700 hover:bg-gray-50 text-[15px]">
                                            <span className="text-xl w-6 flex justify-center text-gray-500">🕒</span>
                                            <span className="font-medium">근태관리</span>
                                        </button>
                                        <button className="w-full flex items-center gap-4 px-4 py-2.5 text-gray-700 hover:bg-gray-50 text-[15px]">
                                            <span className="text-xl w-6 flex justify-center text-gray-500">✉️</span>
                                            <span className="font-medium">메시지</span>
                                        </button>
                                        <button 
                                            onClick={handleLogout}
                                            className="w-full flex items-center gap-4 px-4 py-2.5 text-gray-700 hover:bg-gray-50 text-[15px]"
                                        >
                                            <span className="text-xl w-6 flex justify-center text-gray-500">🚪</span>
                                            <span className="font-medium">로그아웃</span>
                                        </button>
                                        <div className="border-t border-gray-100 my-1"></div>
                                        <button className="w-full flex items-center gap-4 px-4 py-2.5 text-gray-700 hover:bg-gray-50 text-[15px]">
                                            <span className="text-xl w-6 flex justify-center text-gray-600 font-bold">ⓘ</span>
                                            <span className="font-medium">제품정보</span>
                                        </button>
                                    </div>
                                )}
                            </div>

                            <a href="#" className="text-gray-500 hover:text-gray-900 ml-1">한국어</a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
