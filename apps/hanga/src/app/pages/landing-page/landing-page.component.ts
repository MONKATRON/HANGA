import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HStyleModule } from '@hanga/h-style';

@Component({
  selector: 'hanga-landing-page',
  standalone: true,
  imports: [
    CommonModule,
    HStyleModule,
  ],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent {

}
