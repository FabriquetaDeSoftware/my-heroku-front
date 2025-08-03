import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortsIconComponent } from './ports-icon.component';

describe('PortsIconComponent', () => {
  let component: PortsIconComponent;
  let fixture: ComponentFixture<PortsIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortsIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortsIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
