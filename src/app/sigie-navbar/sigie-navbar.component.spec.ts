import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SigieNavbarComponent } from './sigie-navbar.component';

describe('SigieNavbarComponent', () => {
  let component: SigieNavbarComponent;
  let fixture: ComponentFixture<SigieNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SigieNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SigieNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
