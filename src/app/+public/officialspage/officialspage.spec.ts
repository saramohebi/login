import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Officialspage } from './officialspage';

describe('Officialspage', () => {
  let component: Officialspage;
  let fixture: ComponentFixture<Officialspage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Officialspage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Officialspage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
