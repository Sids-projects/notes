import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsTliteralsComponent } from './js-tliterals.component';

describe('JsTliteralsComponent', () => {
  let component: JsTliteralsComponent;
  let fixture: ComponentFixture<JsTliteralsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JsTliteralsComponent]
    });
    fixture = TestBed.createComponent(JsTliteralsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
