import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RamUploaderComponent } from './ram-uploader.component';

describe('RamUploaderComponent', () => {
  let component: RamUploaderComponent;
  let fixture: ComponentFixture<RamUploaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RamUploaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RamUploaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
