import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineageSearchComponent } from './lineage-search.component';

describe('LineageSearchComponent', () => {
  let component: LineageSearchComponent;
  let fixture: ComponentFixture<LineageSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineageSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LineageSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
