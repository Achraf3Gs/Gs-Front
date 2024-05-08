import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailFrsCltComponent } from './detail-frs-clt.component';

describe('DetailFrsCltComponent', () => {
  let component: DetailFrsCltComponent;
  let fixture: ComponentFixture<DetailFrsCltComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailFrsCltComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailFrsCltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
