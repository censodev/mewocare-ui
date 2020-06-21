interface Post {
    id: string;
    username: string;
    action: string;
    tags: string[];
    text: string;
    attachments: PostAttachment[];
    comments: PostComment[];
    votes: PostVote;
    clipped: number;
    time: Date;
}

interface PostAttachment {
    type: string;
    url: string;
}

interface PostComment {
    username: string;
    profileUrl: string;
    text: string;
}

interface PostVote {
    up: number;
    down: number;
}

export { Post, PostAttachment, PostComment, PostVote }