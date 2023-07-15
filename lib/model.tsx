export interface PostModel {
    id: string;
    username: null | string;
    message: null | string;
    comment: CommentModel[];
}
export interface CommentModel {
    postId: string;
    id: null | string;
    username: null | string;
    message: null | string;
}