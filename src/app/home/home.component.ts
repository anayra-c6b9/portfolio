import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BannerWrapperComponent } from 'app/UI/banner-wrapper/banner-wrapper.component';
import { PersonalsComponent } from 'app/UI/personals/personals.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  imports: [CommonModule, PersonalsComponent, BannerWrapperComponent],
})
export class HomeComponent {}
