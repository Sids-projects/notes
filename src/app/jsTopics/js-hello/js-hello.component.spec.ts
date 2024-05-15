import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsHelloComponent } from './js-hello.component';

describe('JsHelloComponent', () => {
  let component: JsHelloComponent;
  let fixture: ComponentFixture<JsHelloComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JsHelloComponent]
    });
    fixture = TestBed.createComponent(JsHelloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
