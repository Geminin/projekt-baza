import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogTabelaComponent } from './dialog-tabela.component';

describe('DialogTabelaComponent', () => {
  let component: DialogTabelaComponent;
  let fixture: ComponentFixture<DialogTabelaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogTabelaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogTabelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
