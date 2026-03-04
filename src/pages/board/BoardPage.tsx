import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SidebarLayout from "@/components/SidebarLayout.tsx";
import { useMenu } from '@/hooks/useMenu';
import { getBoardPosts, type BoardPost } from '@/api/board';
import { formatRelativeDate } from '@/utils/dateUtils';

const BoardPage: React.FC = () => {
    const location = useLocation();
    const { subMenuName, subMenuId, subMenuCode } = useMenu();
    const [posts, setPosts] = useState<BoardPost[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    
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

  return (
      <SidebarLayout>
          <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">{subMenuName || '게시판'}</h2>
              <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-md text-sm">
                  글쓰기
              </button>
          </div>

          <div className="flex justify-between items-center mb-4">
              <div>
                  {/* Placeholder for filters */}
              </div>
              <div className="flex items-center gap-4 text-sm">
                  <input type="text" placeholder="검색" className="w-48 h-8 px-2 border rounded-md" />
                  <span>1-20 / 1,590</span>
                  <select className="h-8 border rounded-md bg-white">
                      <option>20</option>
                      <option>50</option>
                      <option>100</option>
                  </select>
                  <div className="flex">
                      <button className="px-2 py-1 border rounded-l-md hover:bg-gray-100">-</button>
                      <button className="px-2 py-1 border-t border-b hover:bg-gray-100">+</button>
                      <button className="px-2 py-1 border rounded-r-md hover:bg-gray-100">++</button>
                  </div>
              </div>
          </div>

          {/* Posts Table */}
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left text-gray-500">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                      <tr>
                          <th scope="col" className="p-4">
                              <input type="checkbox" />
                          </th>
                          <th scope="col" className="py-3 px-6 w-12 text-center">★</th>
                          <th scope="col" className="py-3 px-6">제목</th>
                          <th scope="col" className="py-3 px-6 text-center">조회</th>
                          <th scope="col" className="py-3 px-6">작성자</th>
                          <th scope="col" className="py-3 px-6 text-right">수정일자</th>
                      </tr>
                  </thead>
                  <tbody>
                      {loading ? (
                          <tr>
                              <td colSpan={6} className="py-10 text-center">데이터를 불러오는 중입니다...</td>
                          </tr>
                      ) : posts.length === 0 ? (
                          <tr>
                              <td colSpan={6} className="py-10 text-center">등록된 게시물이 없습니다.</td>
                          </tr>
                      ) : (
                          posts.map(post => (
                              <tr key={post.postId} className="bg-white border-b hover:bg-gray-50">
                                  <td className="w-4 p-4">
                                      <input type="checkbox" />
                                  </td>
                                  <td className="py-4 px-6 text-center">
                                      {/* @ts-ignore important is likely not in post yet */}
                                      {post.important ? (
                                          <span className="text-yellow-400">★</span>
                                      ) : (
                                          <span className="text-gray-300">☆</span>
                                      )}
                                  </td>
                                  <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap overflow-hidden text-ellipsis max-w-md">
                                      <Link to={`${location.pathname}/${post.postId}`} className="hover:underline hover:text-blue-600">
                                          {post.title}
                                      </Link>
                                  </th>
                                  <td className="py-4 px-6 text-center">{post.views || 0}</td>
                                  <td className="py-4 px-6">{post.author || post.writerName || '익명'}</td>
                                  <td className="py-4 px-6 text-right">{formatRelativeDate(post.updatedAt || post.createdAt)}</td>
                              </tr>
                          ))
                      )}
                  </tbody>
              </table>
          </div>
      </SidebarLayout>
  );
};

export default BoardPage;