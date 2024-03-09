import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BannerWrapperComponent } from 'app/UI/banner-wrapper/banner-wrapper.component';
import { openYoutube } from 'utils/deeplinking';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.sass'],
  standalone: true,
  imports: [CommonModule, RouterModule, BannerWrapperComponent],
})
export class ResourcesComponent {
  navigateToChannel = (event: MouseEvent) => {
    openYoutube(event, 'https://www.youtube.com/@silo8553', 'silo8');
  };
}
