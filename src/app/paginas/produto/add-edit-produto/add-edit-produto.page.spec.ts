import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddEditProdutoPage } from './add-edit-produto.page';

describe('AddEditProdutoPage', () => {
  let component: AddEditProdutoPage;
  let fixture: ComponentFixture<AddEditProdutoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddEditProdutoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
