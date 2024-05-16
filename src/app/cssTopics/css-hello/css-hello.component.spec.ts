import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssHelloComponent } from './css-hello.component';

describe('CssHelloComponent', () => {
  let component: CssHelloComponent;
  let fixture: ComponentFixture<CssHelloComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CssHelloComponent]
    });
    fixture = TestBed.createComponent(CssHelloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
