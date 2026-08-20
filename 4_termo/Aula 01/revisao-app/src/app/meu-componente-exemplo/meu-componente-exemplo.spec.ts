import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MeuComponenteExemplo } from './meu-componente-exemplo';

describe('MeuComponenteExemplo', () => {
  let component: MeuComponenteExemplo;
  let fixture: ComponentFixture<MeuComponenteExemplo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeuComponenteExemplo],
    }).compileComponents();

    fixture = TestBed.createComponent(MeuComponenteExemplo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
