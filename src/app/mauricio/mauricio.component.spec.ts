import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MauricioComponent } from './mauricio.component';

describe('MauricioComponent', () => {
  let component: MauricioComponent;
  let fixture: ComponentFixture<MauricioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MauricioComponent]
    });
    fixture = TestBed.createComponent(MauricioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
