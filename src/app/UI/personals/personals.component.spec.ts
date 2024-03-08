import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalsComponent } from './personals.component';

describe('PersonalsComponent', () => {
  let component: PersonalsComponent;
  let fixture: ComponentFixture<PersonalsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonalsComponent]
    });
    fixture = TestBed.createComponent(PersonalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
