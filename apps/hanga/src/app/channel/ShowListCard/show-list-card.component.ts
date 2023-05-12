import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Show } from '../../services/demo-data.service';

@Component({
  selector: 'hanga-show-list-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './show-list-card.component.html',
  styleUrls: ['./show-list-card.component.scss'],
})
export class ShowListCardComponent {
  @Input() show!: Show;
  @Input() index!: number;
}
