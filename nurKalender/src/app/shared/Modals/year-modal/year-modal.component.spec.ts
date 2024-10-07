import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearModalComponent } from './year-modal.component';

describe('YearModalComponent', () => {
  let component: YearModalComponent;
  let fixture: ComponentFixture<YearModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YearModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YearModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
