import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesStatistiquesComponent } from './pages-statistiques.component';

describe('PagesStatistiquesComponent', () => {
  let component: PagesStatistiquesComponent;
  let fixture: ComponentFixture<PagesStatistiquesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PagesStatistiquesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PagesStatistiquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
