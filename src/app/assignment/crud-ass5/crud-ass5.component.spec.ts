import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CRUDAss5Component } from './crud-ass5.component';

describe('CRUDAss5Component', () => {
  let component: CRUDAss5Component;
  let fixture: ComponentFixture<CRUDAss5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CRUDAss5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CRUDAss5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
