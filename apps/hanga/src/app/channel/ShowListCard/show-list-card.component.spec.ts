import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShowListCardComponent } from './show-list-card.component';

describe('ShowListCardComponent', () => {
  let component: ShowListCardComponent;
  let fixture: ComponentFixture<ShowListCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowListCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ShowListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
