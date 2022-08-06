import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterShopBookComponent } from './footer-shop-book.component';

describe('FooterShopBookComponent', () => {
  let component: FooterShopBookComponent;
  let fixture: ComponentFixture<FooterShopBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterShopBookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterShopBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
