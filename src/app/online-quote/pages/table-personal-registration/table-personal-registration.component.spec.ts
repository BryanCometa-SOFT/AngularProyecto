import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePersonalRegistrationComponent } from './table-personal-registration.component';

describe('TablePersonalRegistrationComponent', () => {
  let component: TablePersonalRegistrationComponent;
  let fixture: ComponentFixture<TablePersonalRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablePersonalRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablePersonalRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
