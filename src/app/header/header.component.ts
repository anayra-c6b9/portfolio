import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CustomLinkCollection } from 'interfaces/linkCollection';
import { trackById } from 'utils/trackFunctions';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
  imports: [CommonModule, RouterModule]
})
export class HeaderComponent implements OnInit {

  headerLinks: CustomLinkCollection = [
    {
      id: 1,
      link: ["./blog"],
      name: "BLOG"
    },
    {
      id: 2,
      link: ["./projects"],
      name: "PROJECTS"
    },
    {
      id: 3,
      link: ["./contact"],
      name: "CONTACT"
    },
    {
      id: 4,
      link: ["./resources"],
      name: "RESOURCES"
    }
  ]

  trackfn = trackById

  ngOnInit(): void {
    const file = document.getElementById("file");

    const dropdown = document.getElementById("file-dropdown")
    if(dropdown !== null)
      dropdown.style.visibility = "hidden"

    // adding events to FILE link
    file?.addEventListener("click", function() {
      if(dropdown !== null){
          dropdown.style.visibility === "visible" ? dropdown.style.visibility = "hidden" : dropdown.style.visibility = "visible"
      }
    })
    file?.addEventListener("blur", function() {
      setTimeout(() => {
        if(dropdown !== null){
          dropdown.style.visibility = "hidden"
        }
      }, 50);
    })

    // adding events to Dropdown links
    Array.from(dropdown?.children || []).forEach(element => {
      element.addEventListener("click", function(event) {
          event.stopPropagation()

          if(dropdown !== null && dropdown.style.visibility === "visible"){
            dropdown.style.visibility = "hidden"
          }
      })
      
    });
  }

  // toggle color mode
  toggleMode = (event: any) => {

    const body = document.body;

    if(event.target.checked){
      document.documentElement.classList.add('dark');
      localStorage.setItem('aryan-portfolio-theme', 'dark');
    }
    else{
      document.documentElement.classList.remove('dark');
      localStorage.setItem('aryan-portfolio-theme', 'light');}
  }
}
