import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateArtComponent } from './generate-art.component';

describe('GenerateArtComponent', () => {
  let component: GenerateArtComponent;
  let fixture: ComponentFixture<GenerateArtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GenerateArtComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GenerateArtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
