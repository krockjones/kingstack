import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreWindowComponent } from './store-window.component';

describe('StoreWindowComponent', () => {
  let component: StoreWindowComponent;
  let fixture: ComponentFixture<StoreWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreWindowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
