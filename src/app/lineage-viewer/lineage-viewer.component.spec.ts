import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineageViewerComponent } from './lineage-viewer.component';

describe('LineageViewerComponent', () => {
  let component: LineageViewerComponent;
  let fixture: ComponentFixture<LineageViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineageViewerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LineageViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
