import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClusternavbarComponent } from './clusternavbar.component';

describe('ClusternavbarComponent', () => {
  let component: ClusternavbarComponent;
  let fixture: ComponentFixture<ClusternavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClusternavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClusternavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
