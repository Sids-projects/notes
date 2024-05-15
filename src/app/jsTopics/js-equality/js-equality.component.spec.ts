import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsEqualityComponent } from './js-equality.component';

describe('JsEqualityComponent', () => {
  let component: JsEqualityComponent;
  let fixture: ComponentFixture<JsEqualityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JsEqualityComponent]
    });
    fixture = TestBed.createComponent(JsEqualityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
