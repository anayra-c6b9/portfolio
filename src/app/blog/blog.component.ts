import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BlogCardComponent } from 'app/UI/blog-card/blog-card.component';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.sass'],
  standalone: true,
  imports: [CommonModule, RouterModule, BlogCardComponent]
})
export class BlogComponent {

}
