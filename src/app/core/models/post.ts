import { Comment } from './comment';

interface Post {
    id: string;
    username: string;
    action: string;
    tags: string[];
    text: string;
    attachments: PostAttachment[];
    votes: PostVote;
    clipped: number;
    comments: number;
    time: Date;
    isClipped?: boolean;
    isUpVote?: boolean;
    isDownVote?: boolean;
}

interface PostAttachment {
    type: string;
    url: string;
}

interface PostVote {
    up: number;
    down: number;
}

export { Post, PostAttachment, PostVote }