import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProjectCard } from 'interfaces/cardCollection';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.sass'],
})
export class ProjectCardComponent {
  @Input() projectInfo: ProjectCard = {
    link: '',
    image_source:
      'https://media.cnn.com/api/v1/images/stellar/prod/230117132700-02-longest-ever-continuous-flight.jpg?c=original&q=h_618,c_fill',
    image_description: 'project image',
    id: '',
    title: 'Link Shortener',
  };
}
