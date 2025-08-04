import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLogsIconComponent } from './view-logs-icon.component';

describe('ViewLogsIconComponent', () => {
  let component: ViewLogsIconComponent;
  let fixture: ComponentFixture<ViewLogsIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewLogsIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewLogsIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
