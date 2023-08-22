import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentDateTimeComponent } from './current-date-time.component';

describe('CurrentDateTimeComponent', () => {
  let component: CurrentDateTimeComponent;
  let fixture: ComponentFixture<CurrentDateTimeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurrentDateTimeComponent]
    });
    fixture = TestBed.createComponent(CurrentDateTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
