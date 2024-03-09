import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BannerWrapperComponent } from 'app/UI/banner-wrapper/banner-wrapper.component';
import { ProjectCardComponent } from 'app/UI/project-card/project-card.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.sass'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    BannerWrapperComponent,
    ProjectCardComponent,
  ],
})
export class ProjectsComponent {}
