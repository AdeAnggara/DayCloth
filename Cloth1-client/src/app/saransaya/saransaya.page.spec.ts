import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaransayaPage } from './saransaya.page';

describe('SaransayaPage', () => {
  let component: SaransayaPage;
  let fixture: ComponentFixture<SaransayaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaransayaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaransayaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
