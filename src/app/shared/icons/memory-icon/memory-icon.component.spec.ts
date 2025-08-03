import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoryIconComponent } from './memory-icon.component';

describe('MemoryIconComponent', () => {
  let component: MemoryIconComponent;
  let fixture: ComponentFixture<MemoryIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MemoryIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemoryIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
