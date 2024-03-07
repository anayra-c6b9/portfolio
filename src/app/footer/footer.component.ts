import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass'],
})
export class FooterComponent implements OnInit {
  ngOnInit(): void {
    const links: HTMLCollection | [] =
      document.getElementById('footer-links')?.children || [];
    console.log(links);
    for (var i = 0; i < links.length - 1; i++) {
      console.log('ongoing');
      const newLink: HTMLLIElement = document.createElement('li');
      newLink.textContent = '|';
      newLink.style.marginLeft = '4px';
      newLink.style.marginRight = '4px';

      links[i].parentNode?.insertBefore(newLink, links[i].nextSibling);
      i++;
    }
  }
}
