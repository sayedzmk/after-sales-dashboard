import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EidtCategoriesComponent } from './eidt-categories.component';

describe('EidtCategoriesComponent', () => {
  let component: EidtCategoriesComponent;
  let fixture: ComponentFixture<EidtCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EidtCategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EidtCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
