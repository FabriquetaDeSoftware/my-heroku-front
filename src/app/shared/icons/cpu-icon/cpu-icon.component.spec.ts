import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpuIconComponent } from './cpu-icon.component';

describe('CpuIconComponent', () => {
  let component: CpuIconComponent;
  let fixture: ComponentFixture<CpuIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CpuIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CpuIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
