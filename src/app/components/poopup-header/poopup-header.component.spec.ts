import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoopupHeaderComponent } from './poopup-header.component';

describe('PoopupHeaderComponent', () => {
  let component: PoopupHeaderComponent;
  let fixture: ComponentFixture<PoopupHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PoopupHeaderComponent]
    });
    fixture = TestBed.createComponent(PoopupHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
