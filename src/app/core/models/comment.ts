export interface Comment {
    username: string;
    text: string;
    avatar: string;
    replyComments?: Comment[];
}