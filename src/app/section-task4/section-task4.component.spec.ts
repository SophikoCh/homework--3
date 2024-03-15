import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionTask4Component } from './section-task4.component';

describe('SectionTask4Component', () => {
  let component: SectionTask4Component;
  let fixture: ComponentFixture<SectionTask4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionTask4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionTask4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
