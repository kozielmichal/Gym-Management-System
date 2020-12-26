import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerProfileFormsComponent } from './customer-profile-forms.component';

describe('CustomerProfileFormsComponent', () => {
  let component: CustomerProfileFormsComponent;
  let fixture: ComponentFixture<CustomerProfileFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerProfileFormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerProfileFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
