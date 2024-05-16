import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsStateexprComponent } from './js-stateexpr.component';

describe('JsStateexprComponent', () => {
  let component: JsStateexprComponent;
  let fixture: ComponentFixture<JsStateexprComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JsStateexprComponent]
    });
    fixture = TestBed.createComponent(JsStateexprComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
