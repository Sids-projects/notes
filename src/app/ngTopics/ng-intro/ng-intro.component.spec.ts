import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgIntroComponent } from './ng-intro.component';

describe('NgIntroComponent', () => {
  let component: NgIntroComponent;
  let fixture: ComponentFixture<NgIntroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgIntroComponent]
    });
    fixture = TestBed.createComponent(NgIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
