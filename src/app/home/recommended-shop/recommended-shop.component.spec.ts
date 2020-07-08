import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendedShopComponent } from './recommended-shop.component';

describe('RecommendedShopComponent', () => {
  let component: RecommendedShopComponent;
  let fixture: ComponentFixture<RecommendedShopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecommendedShopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommendedShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
