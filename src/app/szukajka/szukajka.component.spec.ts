import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SzukajkaComponent } from './szukajka.component';

describe('SzukajkaComponent', () => {
  let component: SzukajkaComponent;
  let fixture: ComponentFixture<SzukajkaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SzukajkaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SzukajkaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
