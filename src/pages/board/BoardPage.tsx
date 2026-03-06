import React, { useEffect, useState } from 'react';
import { Link, useLocation, useParams, useNavigate } from 'react-router-dom';
import SidebarLayout from "@/components/SidebarLayout.tsx";
import { useMenu } from '@/hooks/useMenu';
import { getBoardPosts, type BoardPost } from '@/api/board';
import { formatRelativeDate } from '@/utils/dateUtils';

const BoardPage: React.FC = () => {
    const { category } = useParams<{ category: string }>();
    const location = useLocation();
    const navigate = useNavigate();
    const { subMenuName, subMenuId } = useMenu();
    const [posts, setPosts] = useState<BoardPost[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    
    const isPhotoBoard = category === 'photo';

    const handleWriteClick = () => {
        navigate(`${location.pathname}/edit`);
    };

    useEffect(() => {
        if (subMenuId) {
            const fetchPosts = async () => {
                try {
                    setLoading(true);
                    const data = await getBoardPosts(subMenuId);
                    setPosts(data);
                } catch (error) {
                    console.error('Failed to fetch board posts:', error);
                    setPosts([]);
                } finally {
                    setLoading(false);
                }
            };
            fetchPosts();
        }
    }, [subMenuId]);

    const PhotoCard = ({ post }: { post: BoardPost }) => (
        <div className="bg-[#E7F3F8] rounded border border-[#C6D9E4] overflow-hidden flex flex-col h-full">
            <div className="p-2 flex justify-between items-start">
                <Link to={`${location.pathname}/${post.postId}`} className="text-[13px] text-[#0055AA] hover:underline font-medium leading-tight line-clamp-2">
                    {post.title}
                </Link>
                <div className="flex items-center gap-1 ml-2 shrink-0">
                    <span className="text-[11px] text-gray-500">💬 7</span>
                    <span className="bg-gray-600/80 text-white text-[10px] px-1 rounded flex items-center gap-0.5">
                        🖼️ 7
                    </span>
                </div>
            </div>
            <div className="flex-1 bg-white mx-1 mb-1 relative min-h-[140px] flex items-center justify-center overflow-hidden border border-[#E0E0E0]">
                {/* Placeholder image as seen in the screenshot */}
                <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                    <span className="text-gray-300 text-4xl">🖼️</span>
                </div>
                <div className="absolute top-0 right-0 p-1">
                    <span className="bg-gray-600/80 text-white text-[10px] px-1 rounded">🖼️ 7</span>
                </div>
            </div>
            <div className="px-2 py-1.5 flex justify-between items-center bg-[#E7F3F8]">
                <span className="text-[11px] text-gray-700">{post.author || post.writerName || '익명'}</span>
                <span className="text-[11px] text-gray-500">{formatRelativeDate(post.updatedAt || post.createdAt)}</span>
            </div>
        </div>
    );

    return (
        <SidebarLayout>
            <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                    <h2 className="text-xl font-bold text-gray-800">{subMenuName || '게시판'}</h2>
                </div>
                <button 
                    onClick={handleWriteClick}
                    className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 py-1.5 px-4 rounded text-sm flex items-center gap-1.5 shadow-sm"
                >
                    📝 글쓰기
                </button>
            </div>

            <div className="flex justify-between items-center mb-4">
                <div>
                    {/* Placeholder for filters */}
                </div>
                <div className="flex items-center gap-2 text-[13px] text-gray-600">
                    <div className="relative">
                        <input type="text" placeholder="검색" className="w-48 h-8 px-3 border border-gray-300 rounded outline-none focus:border-blue-400" />
                        <span className="absolute right-2 top-1.5 text-gray-400">🔍</span>
                    </div>
                    <span>1-20 / 146</span>
                    <select className="h-8 border border-gray-300 rounded bg-white px-1">
                        <option>20</option>
                        <option>50</option>
                        <option>100</option>
                    </select>
                    <div className="flex border border-gray-300 rounded">
                        <button className="px-2 py-1 hover:bg-gray-100 border-r border-gray-300">⬅️</button>
                        <button className="px-2 py-1 hover:bg-gray-100 border-r border-gray-300 text-blue-600 font-bold">1</button>
                        <button className="px-2 py-1 hover:bg-gray-100">➡️</button>
                    </div>
                </div>
            </div>

            {loading ? (
                <div className="py-20 text-center text-gray-500">데이터를 불러오는 중입니다...</div>
            ) : posts.length === 0 ? (
                <div className="py-20 text-center text-gray-500 border border-dashed border-gray-300 rounded-lg">등록된 게시물이 없습니다.</div>
            ) : isPhotoBoard ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                    {posts.map(post => (
                        <PhotoCard key={post.postId} post={post} />
                    ))}
                </div>
            ) : (
                /* Posts Table */
                <div className="relative overflow-x-auto border border-gray-200 rounded">
                    <table className="w-full text-sm text-left text-gray-500">
                        <thead className="text-[13px] text-gray-700 bg-gray-50 border-b border-gray-200">
                            <tr>
                                <th scope="col" className="p-3 w-10">
                                    <input type="checkbox" />
                                </th>
                                <th scope="col" className="py-3 px-2 w-8 text-center text-gray-400">★</th>
                                <th scope="col" className="py-3 px-4">제목</th>
                                <th scope="col" className="py-3 px-4 text-center w-16">조회</th>
                                <th scope="col" className="py-3 px-4 w-32">작성자</th>
                                <th scope="col" className="py-3 px-4 text-right w-32">수정일자</th>
                            </tr>
                        </thead>
                        <tbody>
                            {posts.map(post => (
                                <tr key={post.postId} className="bg-white border-b border-gray-100 hover:bg-gray-50 last:border-0">
                                    <td className="p-3">
                                        <input type="checkbox" />
                                    </td>
                                    <td className="py-3 px-2 text-center text-lg">
                                        <span className="text-gray-300 cursor-pointer hover:text-yellow-400">☆</span>
                                    </td>
                                    <th scope="row" className="py-3 px-4 font-normal text-gray-900 whitespace-nowrap overflow-hidden text-ellipsis max-w-md">
                                        <Link to={`${location.pathname}/${post.postId}`} className="hover:underline hover:text-blue-600">
                                            {post.title}
                                        </Link>
                                    </th>
                                    <td className="py-3 px-4 text-center">{post.views || 0}</td>
                                    <td className="py-3 px-4 text-gray-600">{post.author || post.writerName || '익명'}</td>
                                    <td className="py-3 px-4 text-right text-gray-500">{formatRelativeDate(post.updatedAt || post.createdAt)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </SidebarLayout>
    );
};

export default BoardPage;