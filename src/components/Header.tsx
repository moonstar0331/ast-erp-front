import { Link, useNavigate } from 'react-router-dom';

export default function Header() {
    const navigate = useNavigate();

    return (
        <header className="bg-white border-b">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center gap-8">
                        <img src="/image/logo_ast.png" alt="AST Logo" className="h-9 object-contain" onClick={() => navigate('/dashboard')}/>
                        <nav className="hidden md:flex items-center gap-6 text-base font-semibold text-gray-600">
                            {['게시판', '이메일', '일정관리', '업무관리', '전자결재', '웹디스크', '메모장', '명함관리'].map(item => (
                                <Link to={item === '전자결재' ? '/approval' : (item === '게시판' ? '/notice' : '#')} key={item} className={`hover:text-gray-900`}>{item}</Link>
                            ))}
                        </nav>
                    </div>
                    <div className="flex items-center gap-4">
                        <input type="text" placeholder="통합검색" className="hidden md:block w-40 h-8 px-2 border rounded-md text-sm" />
                        <div className="flex items-center gap-3 text-sm">
                            <span>☆</span>
                            <span>🔔</span>
                            <span className="font-semibold">김문성</span>
                            <a href="#" className="text-gray-500">한국어</a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
