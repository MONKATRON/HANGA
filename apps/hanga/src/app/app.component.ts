import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HAssetsModule } from '@hanga/h-assets';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'hanga-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  title = 'hanga';
}
