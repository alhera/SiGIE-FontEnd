import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveRequestNewsComponent } from './save-request-news.component';

describe('SaveRequestNewsComponent', () => {
  let component: SaveRequestNewsComponent;
  let fixture: ComponentFixture<SaveRequestNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveRequestNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveRequestNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
