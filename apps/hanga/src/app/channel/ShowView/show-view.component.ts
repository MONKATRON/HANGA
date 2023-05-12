import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoDataService, Show } from '../../services/demo-data.service';
import { Observable, map } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'hanga-show-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './show-view.component.html',
  styleUrls: ['./show-view.component.scss'],
})
export class ShowViewComponent implements OnInit {

    show$!: Observable<Show | undefined>;
  
    constructor( private showService: DemoDataService, private route: ActivatedRoute ) { }
  
    ngOnInit(): void {
      this.show$ = this.route.paramMap.pipe( map (params => {
        return this.showService.shows[Number(params.get('index'))]
      }))
    }
}
