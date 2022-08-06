import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderShopBookComponent } from './header-shop-book.component';

describe('HeaderShopBookComponent', () => {
  let component: HeaderShopBookComponent;
  let fixture: ComponentFixture<HeaderShopBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderShopBookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderShopBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
