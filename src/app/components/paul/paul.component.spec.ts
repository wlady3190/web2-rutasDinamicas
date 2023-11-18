import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaulComponent } from './paul.component';

describe('PaulComponent', () => {
  let component: PaulComponent;
  let fixture: ComponentFixture<PaulComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaulComponent]
    });
    fixture = TestBed.createComponent(PaulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
