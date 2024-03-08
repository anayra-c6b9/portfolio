import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogCard } from 'interfaces/cardCollection';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-blog-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.sass']
})
export class BlogCardComponent {
  @Input() cardInfo: BlogCard = {
    title: "Rising threat of A.I.",
    description: "It has been three years since, we can see the rise of the use of A.I. in our day to day life. It has been three years since, we can see the rise of the use of A.I. in our day to day life.",
    link: "",
    id: "",
    image_source: "https://media.cnn.com/api/v1/images/stellar/prod/230117132700-02-longest-ever-continuous-flight.jpg?c=original&q=h_618,c_fill",
    image_description: "Profile Picture"
  }

  labelRaised = false

  toggleLabel = () => {
    this.labelRaised = !this.labelRaised
  }

}
