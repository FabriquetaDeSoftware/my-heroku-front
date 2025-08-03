import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UptimeIconComponent } from './uptime-icon.component';

describe('UptimeIconComponent', () => {
  let component: UptimeIconComponent;
  let fixture: ComponentFixture<UptimeIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UptimeIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UptimeIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
