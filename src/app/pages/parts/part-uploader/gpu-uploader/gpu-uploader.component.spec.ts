import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GpuUploaderComponent } from './gpu-uploader.component';

describe('GpuUploaderComponent', () => {
  let component: GpuUploaderComponent;
  let fixture: ComponentFixture<GpuUploaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GpuUploaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GpuUploaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
