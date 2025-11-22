import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Careerhistorypage } from './careerhistorypage';

describe('Careerhistorypage', () => {
  let component: Careerhistorypage;
  let fixture: ComponentFixture<Careerhistorypage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Careerhistorypage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Careerhistorypage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
