import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SourceSplitComponent } from './source-split.component';

describe('SourceSplitComponent', () => {
  let component: SourceSplitComponent;
  let fixture: ComponentFixture<SourceSplitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SourceSplitComponent]
    });
    fixture = TestBed.createComponent(SourceSplitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
