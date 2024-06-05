import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgHelloComponent } from './ng-hello.component';

describe('NgHelloComponent', () => {
  let component: NgHelloComponent;
  let fixture: ComponentFixture<NgHelloComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgHelloComponent]
    });
    fixture = TestBed.createComponent(NgHelloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
