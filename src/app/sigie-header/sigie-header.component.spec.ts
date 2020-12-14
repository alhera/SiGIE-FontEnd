import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SigieHeaderComponent } from './sigie-header.component';

describe('SigieHeaderComponent', () => {
  let component: SigieHeaderComponent;
  let fixture: ComponentFixture<SigieHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SigieHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SigieHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
