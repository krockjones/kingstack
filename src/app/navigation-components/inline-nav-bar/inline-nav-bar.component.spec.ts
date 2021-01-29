import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineNavBarComponent } from './inline-nav-bar.component';

describe('InlineNavBarComponent', () => {
  let component: InlineNavBarComponent;
  let fixture: ComponentFixture<InlineNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InlineNavBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InlineNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
