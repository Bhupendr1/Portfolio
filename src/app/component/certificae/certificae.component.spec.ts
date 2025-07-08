import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificaeComponent } from './certificae.component';

describe('CertificaeComponent', () => {
  let component: CertificaeComponent;
  let fixture: ComponentFixture<CertificaeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CertificaeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CertificaeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
