import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsArrayComponent } from './js-array.component';

describe('JsArrayComponent', () => {
  let component: JsArrayComponent;
  let fixture: ComponentFixture<JsArrayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JsArrayComponent]
    });
    fixture = TestBed.createComponent(JsArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
