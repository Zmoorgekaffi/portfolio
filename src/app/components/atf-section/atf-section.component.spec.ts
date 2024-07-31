import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtfSectionComponent } from './atf-section.component';

describe('AtfSectionComponent', () => {
  let component: AtfSectionComponent;
  let fixture: ComponentFixture<AtfSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtfSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AtfSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
