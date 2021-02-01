import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerMultipleSelectionComponent } from './datepicker-multiple-selection.component';

describe('DatepickerMultipleSelectionComponent', () => {
  let component: DatepickerMultipleSelectionComponent;
  let fixture: ComponentFixture<DatepickerMultipleSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatepickerMultipleSelectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatepickerMultipleSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
