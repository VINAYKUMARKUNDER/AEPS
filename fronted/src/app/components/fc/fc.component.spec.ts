import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FCComponent } from './fc.component';

describe('FCComponent', () => {
  let component: FCComponent;
  let fixture: ComponentFixture<FCComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FCComponent]
    });
    fixture = TestBed.createComponent(FCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
