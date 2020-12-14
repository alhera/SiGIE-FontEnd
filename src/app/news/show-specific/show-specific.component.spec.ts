import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSpecificComponent } from './show-specific.component';

describe('ShowSpecificComponent', () => {
  let component: ShowSpecificComponent;
  let fixture: ComponentFixture<ShowSpecificComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowSpecificComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowSpecificComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
