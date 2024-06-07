import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTagComponent } from './list-tag.component';

describe('ListTagComponent', () => {
  let component: ListTagComponent;
  let fixture: ComponentFixture<ListTagComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListTagComponent]
    });
    fixture = TestBed.createComponent(ListTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
