import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmContainerComponent } from './farm-container.component';

describe('FarmContainerComponent', () => {
  let component: FarmContainerComponent;
  let fixture: ComponentFixture<FarmContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
