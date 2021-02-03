import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SandboxRedirectComponent } from './sandbox-redirect.component';

describe('SandboxRedirectComponent', () => {
  let component: SandboxRedirectComponent;
  let fixture: ComponentFixture<SandboxRedirectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SandboxRedirectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SandboxRedirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
