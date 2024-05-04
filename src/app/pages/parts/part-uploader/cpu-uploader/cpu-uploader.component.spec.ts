import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpuUploaderComponent } from './cpu-uploader.component';

describe('CpuUploaderComponent', () => {
  let component: CpuUploaderComponent;
  let fixture: ComponentFixture<CpuUploaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CpuUploaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CpuUploaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
