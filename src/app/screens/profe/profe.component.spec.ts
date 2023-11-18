import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfeComponent } from './profe.component';

describe('ProfeComponent', () => {
  let component: ProfeComponent;
  let fixture: ComponentFixture<ProfeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfeComponent]
    });
    fixture = TestBed.createComponent(ProfeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
