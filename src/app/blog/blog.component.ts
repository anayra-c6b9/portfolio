import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BannerWrapperComponent } from 'app/UI/banner-wrapper/banner-wrapper.component';
import { BlogCardComponent } from 'app/UI/blog-card/blog-card.component';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.sass'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    BlogCardComponent,
    BannerWrapperComponent,
  ],
})
export class BlogComponent implements OnInit {
  ngOnInit(): void {}
}
