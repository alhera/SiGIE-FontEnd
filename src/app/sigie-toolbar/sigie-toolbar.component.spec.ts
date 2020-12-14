import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SigieToolbarComponent } from './sigie-toolbar.component';

describe('SigieToolbarComponent', () => {
  let component: SigieToolbarComponent;
  let fixture: ComponentFixture<SigieToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SigieToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SigieToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
