import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsTruefalseComponent } from './js-truefalse.component';

describe('JsTruefalseComponent', () => {
  let component: JsTruefalseComponent;
  let fixture: ComponentFixture<JsTruefalseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JsTruefalseComponent]
    });
    fixture = TestBed.createComponent(JsTruefalseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
