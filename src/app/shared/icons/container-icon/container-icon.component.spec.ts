import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerIconComponent } from './container-icon.component';

describe('ContainerIconComponent', () => {
  let component: ContainerIconComponent;
  let fixture: ComponentFixture<ContainerIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContainerIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
