import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SourceCodeComponent } from './source-code.component';

describe('SourceCodeComponent', () => {
  let component: SourceCodeComponent;
  let fixture: ComponentFixture<SourceCodeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SourceCodeComponent]
    });
    fixture = TestBed.createComponent(SourceCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
