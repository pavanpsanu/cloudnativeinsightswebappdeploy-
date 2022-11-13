import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cluster4Component } from './cluster4.component';

describe('Cluster4Component', () => {
  let component: Cluster4Component;
  let fixture: ComponentFixture<Cluster4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cluster4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cluster4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
