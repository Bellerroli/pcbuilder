import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsuUploaderComponent } from './psu-uploader.component';

describe('PsuUploaderComponent', () => {
  let component: PsuUploaderComponent;
  let fixture: ComponentFixture<PsuUploaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PsuUploaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PsuUploaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
