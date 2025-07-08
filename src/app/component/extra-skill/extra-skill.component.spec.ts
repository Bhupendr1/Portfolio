import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraSkillComponent } from './extra-skill.component';

describe('ExtraSkillComponent', () => {
  let component: ExtraSkillComponent;
  let fixture: ComponentFixture<ExtraSkillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExtraSkillComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExtraSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
