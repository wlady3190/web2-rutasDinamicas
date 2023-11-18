import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KevinComponent } from './kevin.component';

describe('KevinComponent', () => {
  let component: KevinComponent;
  let fixture: ComponentFixture<KevinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KevinComponent]
    });
    fixture = TestBed.createComponent(KevinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
