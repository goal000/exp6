import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaacultyComponent } from './faaculty.component';

describe('FaacultyComponent', () => {
  let component: FaacultyComponent;
  let fixture: ComponentFixture<FaacultyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FaacultyComponent]
    });
    fixture = TestBed.createComponent(FaacultyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
