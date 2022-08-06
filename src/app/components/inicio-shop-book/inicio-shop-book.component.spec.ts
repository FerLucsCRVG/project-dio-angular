import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioShopBookComponent } from './inicio-shop-book.component';

describe('InicioShopBookComponent', () => {
  let component: InicioShopBookComponent;
  let fixture: ComponentFixture<InicioShopBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioShopBookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioShopBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
