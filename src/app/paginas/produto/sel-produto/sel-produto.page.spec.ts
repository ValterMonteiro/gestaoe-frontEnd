import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SelProdutoPage } from './sel-produto.page';

describe('SelProdutoPage', () => {
  let component: SelProdutoPage;
  let fixture: ComponentFixture<SelProdutoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DashboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
