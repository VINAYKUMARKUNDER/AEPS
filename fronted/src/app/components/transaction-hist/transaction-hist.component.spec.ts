import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionHistComponent } from './transaction-hist.component';

describe('TransactionHistComponent', () => {
  let component: TransactionHistComponent;
  let fixture: ComponentFixture<TransactionHistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransactionHistComponent]
    });
    fixture = TestBed.createComponent(TransactionHistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
