import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaShopBookComponent } from './lista-shop-book.component';

describe('ListaShopBookComponent', () => {
  let component: ListaShopBookComponent;
  let fixture: ComponentFixture<ListaShopBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaShopBookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaShopBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
