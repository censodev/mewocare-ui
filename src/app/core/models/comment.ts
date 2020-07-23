export interface Comment {
    uid: string;
    username: string;
    text: string;
    avatar: string;
    replyComments?: Comment[];
}