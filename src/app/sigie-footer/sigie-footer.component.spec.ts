import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SigieFooterComponent } from './sigie-footer.component';

describe('SigieFooterComponent', () => {
  let component: SigieFooterComponent;
  let fixture: ComponentFixture<SigieFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SigieFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SigieFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
