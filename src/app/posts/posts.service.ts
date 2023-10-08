import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class PostsService {
    private posts : Post[] = []
    private postsUpdated = new Subject<Post[]>();

    getPosts = () => {
        return [...this.posts];
    }

    getPostsUpdateListener = () => {
        return this.postsUpdated.asObservable();
    }

    addPosts = (title: string, content: string) => {
        const addedPosts: Post = {title: title, content: content}
        this.posts.push(addedPosts);
        this.postsUpdated.next([...this.posts]);
    }
}

