import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriedComponent } from './categoried.component';

describe('CategoriedComponent', () => {
  let component: CategoriedComponent;
  let fixture: ComponentFixture<CategoriedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
