import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursedescComponent } from './coursedesc.component';

describe('CoursedescComponent', () => {
  let component: CoursedescComponent;
  let fixture: ComponentFixture<CoursedescComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursedescComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursedescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
