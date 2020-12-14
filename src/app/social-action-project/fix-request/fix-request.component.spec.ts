import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixRequestComponent } from './fix-request.component';

describe('FixRequestComponent', () => {
  let component: FixRequestComponent;
  let fixture: ComponentFixture<FixRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});

