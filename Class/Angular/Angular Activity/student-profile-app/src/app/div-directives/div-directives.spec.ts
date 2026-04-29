import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivDirectives } from './div-directives';

describe('DivDirectives', () => {
  let component: DivDirectives;
  let fixture: ComponentFixture<DivDirectives>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DivDirectives],
    }).compileComponents();

    fixture = TestBed.createComponent(DivDirectives);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
