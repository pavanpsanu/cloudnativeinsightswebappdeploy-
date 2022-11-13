import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cluster3Component } from './cluster3.component';

describe('Cluster3Component', () => {
  let component: Cluster3Component;
  let fixture: ComponentFixture<Cluster3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cluster3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cluster3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
