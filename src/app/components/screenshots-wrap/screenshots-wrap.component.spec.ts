import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenshotsWrapComponent } from './screenshots-wrap.component';

describe('ScreenshotsWrapComponent', () => {
  let component: ScreenshotsWrapComponent;
  let fixture: ComponentFixture<ScreenshotsWrapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScreenshotsWrapComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScreenshotsWrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
