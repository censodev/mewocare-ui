import { Comment } from './comment';

interface Post {
    id: string;
    username: string;
    action: string;
    tags: string[];
    text: string;
    attachments: PostAttachment[];
    likes: number;
    clipped: number;
    comments: number;
    time: Date;
    isClipped?: boolean;
    isLiked?: boolean;
}

interface PostAttachment {
    type: string;
    url: string;
}

export { Post, PostAttachment }