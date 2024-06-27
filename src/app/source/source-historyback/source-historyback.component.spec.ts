import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SourceHistorybackComponent } from './source-historyback.component';

describe('SourceHistorybackComponent', () => {
  let component: SourceHistorybackComponent;
  let fixture: ComponentFixture<SourceHistorybackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SourceHistorybackComponent]
    });
    fixture = TestBed.createComponent(SourceHistorybackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
