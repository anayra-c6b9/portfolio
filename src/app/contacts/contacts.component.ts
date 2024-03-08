import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PersonalsComponent } from 'app/UI/personals/personals.component';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.sass'],
  standalone: true,
  imports: [CommonModule, RouterModule, PersonalsComponent]
})
export class ContactsComponent {
  instagramLink = "https://www.instagram.com/silo_8__/"
  linkedinLink = "https://in.linkedin.com/in/aryan-gurung-4b10b6220"
  behanceLink = ""
  mailLink = "https://mail.google.com/mail/?view=cm&fs=1&to=solowolo236@gmail.com"
  gitLink = "https://github.com/anayra-c6b9"
}
