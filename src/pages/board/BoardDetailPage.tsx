import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import SidebarLayout from "@/components/SidebarLayout.tsx";
import { useMenu } from '@/hooks/useMenu';
import { getBoardPost, type BoardPost } from '@/api/board';
import { formatRelativeDate } from '@/utils/dateUtils';

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
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">{subMenuName || '게시판'}</h2>
                <div className="flex gap-2">
                    <button 
                        onClick={handleBack}
                        className="bg-white border border-gray-300 hover:bg-gray-100 text-gray-700 font-semibold py-2 px-4 rounded-md text-sm"
                    >
                        목록
                    </button>
                    <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-md text-sm">
                        수정
                    </button>
                    <button className="bg-red-50 border border-red-200 hover:bg-red-100 text-red-600 font-semibold py-2 px-4 rounded-md text-sm">
                        삭제
                    </button>
                </div>
            </div>

            {loading ? (
                <div className="py-20 text-center text-gray-500">데이터를 불러오는 중입니다...</div>
            ) : !post ? (
                <div className="py-20 text-center text-gray-500">게시글을 찾을 수 없습니다.</div>
            ) : (
                <div className="bg-white shadow-sm border border-gray-200 rounded-lg overflow-hidden">
                    {/* Post Header */}
                    <div className="p-6 border-b border-gray-100">
                        <h1 className="text-2xl font-bold text-gray-900 mb-4">{post.title}</h1>
                        <div className="flex justify-between items-center text-sm text-gray-500">
                            <div className="flex items-center gap-4">
                                <span className="font-medium text-gray-700">{post.author || post.writerName || '익명'}</span>
                                <span className="text-gray-300">|</span>
                                <span>{formatRelativeDate(post.createdAt)}</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <span>조회 {post.views || 0}</span>
                            </div>
                        </div>
                    </div>

                    {/* Post Content */}
                    <div className="p-8 min-h-[300px] text-gray-800 leading-relaxed whitespace-pre-wrap">
                        {post.content}
                    </div>

                    {/* Post Footer / Actions */}
                    <div className="bg-gray-50 px-6 py-4 border-t border-gray-100 flex justify-between items-center">
                        <div className="flex gap-4">
                            {/* Placeholder for attachments or comments count */}
                        </div>
                        <button className="text-blue-600 hover:underline text-sm font-medium">
                            다음 글 &gt;
                        </button>
                    </div>
                </div>
            )}
        </SidebarLayout>
    );
};

export default BoardDetailPage;
