import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Show, DemoDataService } from '../../services/demo-data.service';
import { ShowListCardComponent } from '../ShowListCard/show-list-card.component';
import { Observable, map } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'hanga-show-list',
  standalone: true,
  imports: [
    CommonModule,
    ShowListCardComponent
  ],
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.scss'],
})
export class ShowListComponent implements OnInit {
  
  show$:Observable<Show> | undefined;
  
  constructor( readonly demoService:DemoDataService, private route: ActivatedRoute ) {}

  ngOnInit(): void {
      this.show$ = this.route.paramMap.pipe(map(param => {
        return this.demoService.shows[Number(param.get('id'))];
      }));
  }
}
