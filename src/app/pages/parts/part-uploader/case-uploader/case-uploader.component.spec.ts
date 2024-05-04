import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseUploaderComponent } from './case-uploader.component';

describe('CaseUploaderComponent', () => {
  let component: CaseUploaderComponent;
  let fixture: ComponentFixture<CaseUploaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CaseUploaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CaseUploaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
