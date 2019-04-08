import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaranPage } from './saran.page';

describe('SaranPage', () => {
  let component: SaranPage;
  let fixture: ComponentFixture<SaranPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaranPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaranPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
