import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotherboardUploaderComponent } from './motherboard-uploader.component';

describe('MotherboardUploaderComponent', () => {
  let component: MotherboardUploaderComponent;
  let fixture: ComponentFixture<MotherboardUploaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MotherboardUploaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MotherboardUploaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
