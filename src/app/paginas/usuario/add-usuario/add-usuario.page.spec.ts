import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddUsuarioPage } from './add-usuario.page';

describe('usuarioPage', () => {
  let component: AddUsuarioPage;
  let fixture: ComponentFixture<AddUsuarioPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UsuarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
