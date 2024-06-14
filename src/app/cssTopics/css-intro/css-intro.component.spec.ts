import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssIntroComponent } from './css-intro.component';

describe('CssIntroComponent', () => {
  let component: CssIntroComponent;
  let fixture: ComponentFixture<CssIntroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CssIntroComponent]
    });
    fixture = TestBed.createComponent(CssIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
