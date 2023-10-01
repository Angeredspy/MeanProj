import { Post } from './post.model';

export class PostsService {
    private posts : Post[] = []

    getPosts = () => {
        return [...this.posts]
    }

    addPosts = (post: Post) => {
        const addedPosts: Post = {title: post.title, content: post.content}
        this.posts.push(addedPosts)
    }

}

