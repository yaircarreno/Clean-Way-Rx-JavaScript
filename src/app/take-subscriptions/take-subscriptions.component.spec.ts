import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeSubscriptionsComponent } from './take-subscriptions.component';

describe('TakeSubscriptionsComponent', () => {
  let component: TakeSubscriptionsComponent;
  let fixture: ComponentFixture<TakeSubscriptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TakeSubscriptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TakeSubscriptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
