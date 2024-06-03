import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainGuideComponent } from './main-guide.component';

describe('MainGuideComponent', () => {
  let component: MainGuideComponent;
  let fixture: ComponentFixture<MainGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainGuideComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
