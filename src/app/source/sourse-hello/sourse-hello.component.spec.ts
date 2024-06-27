import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SourseHelloComponent } from './sourse-hello.component';

describe('SourseHelloComponent', () => {
  let component: SourseHelloComponent;
  let fixture: ComponentFixture<SourseHelloComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SourseHelloComponent]
    });
    fixture = TestBed.createComponent(SourseHelloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
