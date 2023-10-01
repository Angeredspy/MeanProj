import { Component, EventEmitter, Output } from '@angular/core';
import { Post } from '../post.model';
@Component({
  selector: 'app-post-create', //The selector property defines the custom HTML tag that
  //Angular will replace with this component.<app-post-create></app-post-create>

  templateUrl: './post-create.component.html', //The templateUrl property tells Angular the location of the HTML file that contains
  //the template for the component. The template is essentially the HTML layout that the component will render.

  styleUrls: ['./post.create.component.css']
})
export class PostCreateComponent {
  enteredTitle = '';
  enteredContent = '';
  
  @Output()
  postCreated = new EventEmitter<Post>();

  onAddPost = () => {
    const post : Post = {
      title: this.enteredTitle, 
      content: this.enteredContent
    }
    this.postCreated.emit(post)
  };
}
