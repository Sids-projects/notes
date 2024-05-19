import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsStrictComponent } from './js-strict.component';

describe('JsStrictComponent', () => {
  let component: JsStrictComponent;
  let fixture: ComponentFixture<JsStrictComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JsStrictComponent]
    });
    fixture = TestBed.createComponent(JsStrictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
