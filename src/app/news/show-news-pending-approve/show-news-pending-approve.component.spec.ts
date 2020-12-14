import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowNewsPendingApproveComponent } from './show-news-pending-approve.component';

describe('ShowNewsPendingApproveComponent', () => {
  let component: ShowNewsPendingApproveComponent;
  let fixture: ComponentFixture<ShowNewsPendingApproveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowNewsPendingApproveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowNewsPendingApproveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
