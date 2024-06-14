import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssCodeComponent } from './css-code.component';

describe('CssCodeComponent', () => {
  let component: CssCodeComponent;
  let fixture: ComponentFixture<CssCodeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CssCodeComponent]
    });
    fixture = TestBed.createComponent(CssCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
