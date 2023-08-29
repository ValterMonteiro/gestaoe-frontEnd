import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastroDeProdutoPage } from './cadastro-de-produto.page';

describe('CadastroDeProdutoPage', () => {
  let component: CadastroDeProdutoPage;
  let fixture: ComponentFixture<CadastroDeProdutoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CadastroDeProdutoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
