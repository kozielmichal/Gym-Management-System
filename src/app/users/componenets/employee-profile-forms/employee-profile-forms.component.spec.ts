import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeProfileFormsComponent } from './employee-profile-forms.component';

describe('EmployeeProfileFormsComponent', () => {
  let component: EmployeeProfileFormsComponent;
  let fixture: ComponentFixture<EmployeeProfileFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeProfileFormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeProfileFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
