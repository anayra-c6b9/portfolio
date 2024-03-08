import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PersonalsComponent } from 'app/UI/personals/personals.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  imports: [CommonModule, PersonalsComponent]
})
export class HomeComponent {

}
