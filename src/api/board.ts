import apiClient from '@/utils/apiClient';
import { SERVICE_API } from './constants';

export interface Board {
    boardId: number;
    boardTypeCode: string;
    boardName: string;
    useCommentYn: boolean;
    useYn: boolean;
    menuId: number;
    posts: BoardPost[];
}

export interface BoardPost {
    postId: number;
    boardId: number;
    writerId: number;
    writerName?: string;
    author?: string; // Keep author if needed by prompt
    views?: number;
    title: string;
    content: string;
    postStatusCode: string;
    createdAt: string;
    createdBy: number;
    updatedAt: string;
    updatedBy: number;
}

export async function getBoardPosts(menuId: number): Promise<BoardPost[]> {
    const res = await apiClient.get<Board>(`${SERVICE_API.BOARD}/api/board/menu/${menuId}`) as unknown as Board;
    return res.posts || [];
}

export async function getBoardPost(postId: number): Promise<BoardPost> {
    const res = await apiClient.get<BoardPost>(`${SERVICE_API.BOARD}/api/board/post/${postId}`) as unknown as BoardPost;
    return res;
}
