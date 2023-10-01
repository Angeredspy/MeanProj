import { Component, EventEmitter, Output } from '@angular/core';
import { Post } from '../post.model';
import { NgForm } from '@angular/forms';
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

  onAddPost = (form: NgForm) => {
      if (form.invalid) {
        return;
      }

    const post : Post = {
      title: form.value.title, 
      content: form.value.content
    }
    this.postCreated.emit(post)
  };
}
