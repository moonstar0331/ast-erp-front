import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import SidebarLayout from "@/components/SidebarLayout.tsx";
import { useMenu } from '@/hooks/useMenu';
import { getBoardPost, type BoardPost } from '@/api/board';
import { formatDate } from '@/utils/dateUtils';

const BoardDetailPage: React.FC = () => {
    const { postId } = useParams<{ postId: string }>();
    const navigate = useNavigate();
    const { subMenuName } = useMenu();
    const [post, setPost] = useState<BoardPost | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        if (postId) {
            const fetchPost = async () => {
                try {
                    setLoading(true);
                    const data = await getBoardPost(parseInt(postId));
                    setPost(data);
                } catch (error) {
                    console.error('Failed to fetch board post:', error);
                } finally {
                    setLoading(false);
                }
            };
            fetchPost();
        }
    }, [postId]);

    const handleBack = () => {
        navigate(-1);
    };

    return (
        <SidebarLayout>
            {/* Toolbar Area */}
            <div className="flex justify-between items-center mb-4 border-b pb-2 border-gray-100">
                <div className="flex gap-2">
                    <button 
                        onClick={handleBack}
                        className="flex items-center gap-1.5 bg-gray-100 border border-gray-300 hover:bg-gray-200 text-gray-700 font-medium py-1 px-3 rounded text-sm"
                    >
                        <span>≡</span> 목록
                    </button>
                    <button className="flex items-center gap-1.5 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium py-1 px-3 rounded text-sm">
                        <span>📅</span> 일정추가
                    </button>
                    <button className="flex items-center gap-1.5 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium py-1 px-3 rounded text-sm">
                        <span>📁</span> 웹디스크
                    </button>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-600 font-medium">
                    <span>3 / 22</span>
                    <div className="flex border border-gray-300 rounded overflow-hidden">
                        <button className="px-2 py-0.5 border-r border-gray-300 bg-white hover:bg-gray-50 text-blue-500">←</button>
                        <button className="px-2 py-0.5 bg-white hover:bg-gray-50 text-blue-500">→</button>
                    </div>
                </div>
            </div>

            {loading ? (
                <div className="py-20 text-center text-gray-500">데이터를 불러오는 중입니다...</div>
            ) : !post ? (
                <div className="py-20 text-center text-gray-500">게시글을 찾을 수 없습니다.</div>
            ) : (
                <div className="bg-white px-2 mt-4">
                    {/* Post Title Section */}
                    <div className="flex justify-between items-start mb-1">
                        <div className="flex items-start gap-2">
                            <span className="text-gray-400 text-3xl leading-none pt-0.5">☆</span>
                            <h1 className="text-2xl font-bold text-gray-800 leading-tight">{post.title}</h1>
                        </div>
                        <div className="flex flex-col items-end pt-1">
                            <div className="flex items-center gap-1">
                                <span className="bg-gray-600 text-white px-2.5 py-0.5 rounded-full text-[11px] font-bold tracking-tight">조회 {post.views || 0}</span>
                                <span className="bg-gray-500 text-white px-2.5 py-0.5 rounded-full text-[11px] font-bold tracking-tight flex items-center gap-0.5">
                                    <span className="text-sm">📎</span> 1
                                </span>
                            </div>
                            <span className="text-blue-500 text-sm mt-3 font-medium">{formatDate(post.createdAt, 'YYYY-MM-DD HH:mm')}</span>
                        </div>
                    </div>

                    {/* Author Section */}
                    <div className="mb-8 pl-10">
                        <span className="text-gray-800 font-medium text-lg">{post.author || post.writerName || '익명'}</span>
                    </div>

                    {/* Post Content */}
                    <div className="min-h-[400px] pl-10 pr-4 text-gray-900 leading-relaxed whitespace-pre-wrap text-[16px] mb-20">
                        {post.content}
                    </div>

                    {/* Comment Area Placeholder */}
                    <div className="mt-12">
                        <div className="border border-gray-200 rounded p-4 bg-white">
                            <textarea 
                                placeholder="의견을 입력하세요\nShift+Enter로 라인추가" 
                                className="w-full border-none focus:ring-0 text-gray-400 placeholder-gray-300 resize-none text-[15px] leading-relaxed overflow-hidden"
                                rows={2}
                                readOnly
                            />
                        </div>
                    </div>
                </div>
            )}
        </SidebarLayout>
    );
};

export default BoardDetailPage;
