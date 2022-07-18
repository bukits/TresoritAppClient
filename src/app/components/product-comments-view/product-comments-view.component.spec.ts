import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCommentsViewComponent } from './product-comments-view.component';

describe('ProductCommentsViewComponent', () => {
  let component: ProductCommentsViewComponent;
  let fixture: ComponentFixture<ProductCommentsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductCommentsViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCommentsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
