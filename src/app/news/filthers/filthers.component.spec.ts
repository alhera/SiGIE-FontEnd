import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilthersComponent } from './filthers.component';

describe('FilthersComponent', () => {
  let component: FilthersComponent;
  let fixture: ComponentFixture<FilthersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilthersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilthersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
