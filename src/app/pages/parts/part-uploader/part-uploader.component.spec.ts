import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartUploaderComponent } from './part-uploader.component';

describe('PartUploaderComponent', () => {
  let component: PartUploaderComponent;
  let fixture: ComponentFixture<PartUploaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartUploaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PartUploaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
